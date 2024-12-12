import { IconButton, TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

interface TextPromptCardProps {
  onSendMessage: (content: string, mediaFile?: File) => void;
}

const useStyles = makeStyles(() => ({
  customTextField: {
    position: "relative",
  },
  mediaPreview: {
    position: "absolute",
    bottom: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: "8px",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
  },
  dragOverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 192, 203, 0.3)",
    border: "2px dashed pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
}));

const TextPromptCard: React.FC<TextPromptCardProps> = ({ onSendMessage }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "" || mediaFile) {
      onSendMessage(inputValue, mediaFile || undefined);
      setInputValue("");
      setMediaFile(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setMediaFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleRemoveMedia = () => {
    setMediaFile(null);
  };

  return (
    <div
      className={classes.customTextField}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {mediaFile && (
        <div className={classes.mediaPreview}>
          <Typography variant="body2">
            Attached file: {mediaFile.name}
          </Typography>
          <Button size="small" onClick={handleRemoveMedia}>
            Remove
          </Button>
        </div>
      )}
      {isDragOver && (
        <div className={classes.dragOverOverlay}>
          <Typography variant="body1">Drop file to attach</Typography>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          className={classes.customTextField}
          variant="outlined"
          size="small"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          fullWidth
          multiline
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TextPromptCard;
