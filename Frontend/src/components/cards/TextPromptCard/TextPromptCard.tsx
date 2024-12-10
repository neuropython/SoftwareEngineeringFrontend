// FILE: TextPromptCard.tsx
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

interface TextPromptCardProps {
  onSendMessage: (content: string) => void;
}

const useStyles = makeStyles(() => ({
  customTextField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "pink",
      },
      "&:hover fieldset": {
        borderColor: "pink",
      },
      "&.Mui-focused fieldset": {
        borderColor: "pink",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "pink", // Focused label color
    },
  },
  customIconButton: {
    color: "pink", // Icon color
  },
}));

const TextPromptCard: React.FC<TextPromptCardProps> = ({ onSendMessage }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    const trimmedMessage = inputValue.trim();
    if (trimmedMessage.length === 0) return; // Do not send empty messages
    onSendMessage(trimmedMessage);
    setInputValue(""); // Clear input after sending
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="text-prompt-card">
      <div
        className="input-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
          className={classes.customTextField}
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <IconButton
          className={classes.customIconButton}
          onClick={handleSendMessage}
          disabled={inputValue.trim().length === 0}
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TextPromptCard;
