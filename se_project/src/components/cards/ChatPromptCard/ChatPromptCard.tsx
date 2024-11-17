import React, { useState } from "react";
import { TextField, Popover, Button } from "@mui/material";

export default function ChatPromptCard() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="chat-prompt-card">
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open AI Chat
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "16px" }}>
          <TextField
            id="outlined-multiline-flexible"
            label=" "
            multiline
            maxRows={4}
            className="custom-text-field"
          />
        </div>
      </Popover>
    </div>
  );
}
