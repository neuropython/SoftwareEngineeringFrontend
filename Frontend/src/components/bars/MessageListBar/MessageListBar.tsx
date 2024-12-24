import React, { useState, useEffect, act } from "react";
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import addUserToRoom from "../../../api/chat/addUserToRoom";
import deleteUserFromRoom from "../../../api/chat/deleteUserFromRoom";
import room from "../../../api/chat/getRoom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
        const handleUser = async (action: string) => {
            const userName = window.prompt("Enter the new user's name:");
            if (userName) {
                let response;
                switch (action) {
                    case "del":
                        response = await deleteUserFromRoom(userName, roomId);
                        console.log(`User deleted: ${userName}`);
                        break;
                    case "add":
                        response = await addUserToRoom(userName, roomId);
                        console.log(`New user added: ${userName}`);
                        break;
                    default:
                        console.log(`Unknown action: ${action}`);
                }
                
            }
        };

        const leftGroup = async () => {
            const response = await deleteUserFromRoom(userId, roomId)
            if (response.success) {
                console.log('You have left the group')
        } else {
            console.log('You have left group')
        }
    };
    
        return (
            <nav className="messageListBar">
                <Button
                    startIcon={<PersonAddIcon />}
                    onClick={() => {handleUser("add")}}
                >
                    Add New User
                </Button>

                <Button
                    startIcon={<RemoveCircleOutlineIcon />}
                    onClick={() => {handleUser("del")}}
                >
                    Delete User
                </Button>

                <Button
                startIcon={<ExitToAppIcon />}
                onClick={leftGroup}
            >
                Leave Group
            </Button>
            </nav>
        );
    }
};

export default MessageListBar;