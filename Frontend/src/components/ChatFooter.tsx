import '../styles/Chat.css';
import React from 'react';
import { Button, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SmartToyIcon from '@mui/icons-material/SmartToy';


interface ChatMessageButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
}

const ChatMessageButton: React.FC<ChatMessageButtonProps> = ({ icon, onClick }) => {
    return (
        <Button
            id="chat-message-button"
            onClick={onClick}
        >
            {icon}
        </Button>
    );
};


const ChatFooter: React.FC = () => {
    return (
        <div className="chat-footer">
            <ChatMessageButton icon={<AttachFileIcon />} onClick={() => console.log('Attach File')} />
            <ChatMessageButton icon={<EmojiEmotionsIcon />} onClick={() => console.log('Emoji')} />
            <Input placeholder="Type a message..." className="chat-input" />
            <ChatMessageButton icon={<SmartToyIcon />} onClick={() => console.log('Smart Toy')} />
            <ChatMessageButton icon={<SendIcon />} onClick={() => console.log('Send')} />
        </div>
    );
};

export default ChatFooter;