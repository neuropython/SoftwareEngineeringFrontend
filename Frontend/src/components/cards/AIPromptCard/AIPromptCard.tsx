// FILE: AIPromptCard.tsx
import React, { useState } from "react";
import {
  IconButton,
  Popover,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RobotIcon from "@mui/icons-material/Android";

interface Message {
  id: string; 
  content: string;
  sender: string;
}

const useStyles = makeStyles({
  customIconButton: {
  },
  messageList: {
    maxHeight: "300px",
    overflowY: "auto",
    marginBottom: "16px",
  },
  chatInput: {
    display: "flex",
    alignItems: "center",
  },
  textField: {
    flexGrow: 1,
    marginRight: "8px",
  },
});

interface AIPromptCardProps {
  chatRoomMessages: Message[]; // Add this prop
  // Other props if needed
}

const AIPromptCard: React.FC<AIPromptCardProps> = ({ chatRoomMessages }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<Message[]>([]);

  const getLLMResponse = async (userMessage: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Response to: ${userMessage}`);
      }, 1000);
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMessages([]);
    setInputMessage("");
    setSelectMode(false);
    setSelectedMessages([]);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      sender: "User",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInputMessage("");

    let prompt = inputMessage;
    if (selectedMessages.length > 0) {
      const selectedContent = selectedMessages
        .map((msg) => `${msg.sender}: ${msg.content}`)
        .join("\n");
      prompt = `${selectedContent}\n\nUser: ${inputMessage}`;
    }

    const aiResponseContent = await getLLMResponse(prompt);

    const aiMessage: Message = {
      id: `ai-${Date.now()}`,
      content: aiResponseContent,
      sender: "AI",
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  const handleSelectMessages = () => {
    setSelectMode(true);
    setSelectedMessages([]);
  };

  const handleMessageSelect = (message: Message) => {
    // Toggle message selection
    if (selectedMessages.find((msg) => msg.id === message.id)) {
      setSelectedMessages(
        selectedMessages.filter((msg) => msg.id !== message.id)
      );
    } else {
      setSelectedMessages([...selectedMessages, message]);
    }
  };

  const handleDoneSelecting = () => {
    setSelectMode(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "ai-prompt-popover" : undefined;

  return (
    <div className="chat-prompt-card">
      <IconButton
        className={classes.customIconButton}
        aria-describedby={id}
        onClick={handleClick}
      >
        <RobotIcon />
      </IconButton>
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
        <div style={{ padding: "16px", width: "300px" }}>
          {selectMode ? (
            <>
              <List className={classes.messageList}>
                {chatRoomMessages.map((message) => (
                  <ListItem key={message.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleMessageSelect(message)}
                    >
                      <Checkbox
                        edge="start"
                        checked={selectedMessages.some(
                          (msg) => msg.id === message.id
                        )}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText
                        primary={message.content}
                        secondary={message.sender}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDoneSelecting}
              >
                Done
              </Button>
            </>
          ) : (
            <>
              <List className={classes.messageList}>
                {messages.map((message) => (
                  <ListItem key={message.id}>
                    <ListItemText
                      primary={message.content}
                      secondary={message.sender}
                      style={{
                        textAlign: message.sender === "User" ? "right" : "left",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <div className={classes.chatInput}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  size="small"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              </div>
              <Button
                variant="text"
                color="primary"
                onClick={handleSelectMessages}
                style={{ marginTop: "8px" }}
              >
                Select Messages
              </Button>
            </>
          )}
        </div>
      </Popover>
    </div>
  );
};

export default AIPromptCard;
