// FILE: AIPromptCard.tsx
import React, { useState } from "react";
import SmartToy from "@mui/icons-material/SmartToy";
import {
  IconButton,
  Popover,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Message {
  content: string;
  sender: "User" | "AI";
}

const useStyles = makeStyles({
  customIconButton: {
    // Your custom styles here
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

interface AIPromptCardProps {}

const AIPromptCard: React.FC<AIPromptCardProps> = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<Message[]>([]);

  // Mock function to simulate LLM response (replace with actual API call)
  const getLLMResponse = async (userMessage: string): Promise<string> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Echo: ${userMessage}`);
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
      content: inputMessage,
      sender: "User",
    };

    // Add user's message to the conversation
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input field
    setInputMessage("");

    // Get response from LLM model
    const aiResponseContent = await getLLMResponse(userMessage.content);

    const aiMessage: Message = {
      content: aiResponseContent,
      sender: "AI",
    };

    // Add AI's response to the conversation
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  const handleSelectMessages = () => {
    setSelectMode(true);
    // Logic to populate messages from current chatroom
    // For demonstration, we'll use mock data
    const chatroomMessages: Message[] = [
      { content: "Hello from chatroom!", sender: "User" },
      { content: "Chatroom message 2", sender: "User" },
      // Add more messages as needed
    ];
    setSelectedMessages(chatroomMessages);
  };

  const handleMessageSelect = (message: Message) => {
    // Toggle message selection
    if (selectedMessages.includes(message)) {
      setSelectedMessages(selectedMessages.filter((msg) => msg !== message));
    } else {
      setSelectedMessages([...selectedMessages, message]);
    }
  };

  const handleDoneSelecting = () => {
    setSelectMode(false);
    // You can now use selectedMessages array as needed
    // For example, include them in the prompt to the LLM model
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
        <SmartToy />
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
                {selectedMessages.map((message, index) => (
                  <ListItem key={index} component="div">
                    <ListItemButton
                      onClick={() => handleMessageSelect(message)}
                      selected={selectedMessages.includes(message)}
                    >
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
                {messages.map((message, index) => (
                  <ListItem key={index}>
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
