import React from "react";
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MessageListBar: React.FC = () => {
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
};

export default MessageListBar;