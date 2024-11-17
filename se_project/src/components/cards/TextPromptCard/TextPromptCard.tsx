import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./TextPromptCard.css";

export default function TextPromptCard() {
  return (
    <div className="text-prompt-card">
      <div className="input-container">
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
          className="custom-text-field"
        />
        <div className="send-button-container">
          <IconButton color="primary" className="send-button">
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
