import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './ErrorPopup.css';

interface ErrorPopupProps {
  message: string;
  Open: boolean;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, Open, onClose }) => {
  return (
    <Dialog open={Open} onClose={onClose} className='popup' sx={{ minWidth: '1000px' }}>
      <DialogTitle>Information</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorPopup;