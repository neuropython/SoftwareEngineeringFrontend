import React, { useState } from 'react';
import createRoom from '../../api/chat/createRoom';
import { Button } from '@mui/material';

interface CreateNewRoomComponent{
    chatRoom: string
}

async function CreateNewRoom(chatRoom: string): Promise<void> {
    try {
        const response = await createRoom(chatRoom);
        if (response) {
            window.location.reload();
        }
    } catch (error) {
        console.error('Error creating room:', error);
    }
}


const CrateNewRoomComponent: React.FC<CreateNewRoomComponent> = ({ chatRoom }) => {
    return (
    <div>
        <Button onClick={() => CreateNewRoom(chatRoom)}>Create New Room</Button>
    </div>
    )
}

export default CrateNewRoomComponent
