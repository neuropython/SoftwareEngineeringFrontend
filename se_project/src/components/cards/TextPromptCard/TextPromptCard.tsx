import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import "./TextPromptCard.css";

const useStyles = makeStyles((theme) => ({
  customIconButton: {
    backgroundColor: "pink",
    "&:hover": {
      color: "pink",
    },
  },
  customTextField: {
    color: "pink",
    "& .MuiInputBase-root": {
      color: "black",
    },
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
}));

export default function TextPromptCard() {
  const classes = useStyles();

  return (
    <div className="text-prompt-card">
      <div className="input-container">
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
          className={classes.customTextField}
          fullWidth
        />
        <IconButton className={classes.customIconButton}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
