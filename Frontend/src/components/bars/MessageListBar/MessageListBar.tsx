import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import room from "../../../api/chat/getRoom";

interface MessageListBarProps {
    roomId: string;
    userId: string;
}

async function isAdmin(roomId: string, userId: string): Promise<boolean> {
    const response = await room(roomId);
    const roomData = await response.json();

    const admin = roomData.members.find((member: any) => member.role === 'Admin');
    if (admin) {
        console.log(`Admin ID: ${admin.id}`);
        return admin.id === userId;
    } else {
        console.log('No admin found');
        return false;
    }
}

const MessageListBar: React.FC<MessageListBarProps> = ({ roomId, userId }) => {
        const [iAmAdmin, setIAmAdmin] = useState<boolean | null>(null);
    
        useEffect(() => {
            const checkAdminStatus = async () => {
                const isAdminUser = await isAdmin(roomId, userId);
                setIAmAdmin(isAdminUser);
            };
    
            checkAdminStatus();
        }, [roomId, userId]);

    if (iAmAdmin === null) {
        return null;
    }

    if (!iAmAdmin) {
        return null;
    }

    else {
        const handleAddUser = () => {
            const userName = window.prompt("Enter the new user's name:");
            if (userName) {
                console.log(`New user added: ${userName}`);
                // You can add further logic here to handle the new user
            }
        };
    
        return (
            <nav className="messageListBar">
                <Button
                    startIcon={<PersonAddIcon />}
                    onClick={handleAddUser}
                >
                    Add New User
                </Button>
            </nav>
        );
    }
};

export default MessageListBar;