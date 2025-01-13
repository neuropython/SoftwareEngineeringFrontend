// FILE: AIPromptCard.tsx
import React, { useState } from "react";
import {
  IconButton,
  Popover,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RobotIcon from "@mui/icons-material/Android";
import getMessageSummary from "../../../api/ai/getSummary";

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
  chatRoomId: string;
  chatRoomMessages: Message[];
}

const AIPromptCard: React.FC<AIPromptCardProps> = ({ chatRoomMessages, chatRoomId }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLLMResponse = async (messeges: string[]): Promise<string> => {
    const response = await getMessageSummary(chatRoomId, messeges);
    if (!response.ok) {
      throw new Error("Failed to fetch message summary");
    }
    const data = await response.json();
    return data.summary;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    handleRetrieveMessages(); // Retrieve messages when the pop-up is opened
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMessages([]);
    setSelectMode(false);
    setSelectedMessages([]);
  };

  const handleSendMessage = async () => {
    if (selectedMessages.length > 0) {
      const selectedMessageIds = selectedMessages.map((msg) => msg.id);

      setIsLoading(true);

      try {
        const aiResponseContent = await getLLMResponse(selectedMessageIds);

        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          content: aiResponseContent,
          sender: "AI",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);

        const storedMessages = JSON.parse(sessionStorage.getItem(`ai-responses-${chatRoomId}`) || "[]");
        storedMessages.push(aiMessage);
        sessionStorage.setItem(`ai-responses-${chatRoomId}`, JSON.stringify(storedMessages));

        // Clear selected messages
        setSelectedMessages([]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setIsLoading(false);
      }
    }
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
    handleSendMessage();
  };

  const handleRetrieveMessages = () => {
    const storedMessages = JSON.parse(sessionStorage.getItem(`ai-responses-${chatRoomId}`) || "[]");
    setMessages(storedMessages);
  };

  const handleSelectAllMessages = () => {
    setSelectedMessages(chatRoomMessages);
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
                onClick={handleSelectAllMessages}
                style={{ marginRight: "8px" }}
              >
                Select All
              </Button>
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
              <Button
                variant="text"
                color="primary"
                onClick={handleSelectMessages}
                style={{ marginTop: "8px" }}
                disabled={isLoading}
              >
                Select Messages
              </Button>
              {isLoading && <CircularProgress />}
            </>
          )}
        </div>
      </Popover>
    </div>
  );
};

export default AIPromptCard;
