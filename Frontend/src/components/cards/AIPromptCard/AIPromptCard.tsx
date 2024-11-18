import React, { useState } from "react";
import { Popover, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextPromptCard from "../TextPromptCard/TextPromptCard";
import RobotIcon from "@mui/icons-material/Android";
import MessagesList from "../../lists/MessagesList/MessagesList";

const useStyles = makeStyles((theme) => ({
  customIconButton: {
    "&.MuiIconButton-root": {
      color: "lightpink",
      backgroundColor: "white",
    },
    "&:hover": {
      color: "black",
      backgroundColor: "pink",
    },
  },
}));

export default function AIPromptCard() {
  const classes = useStyles();
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
        <div style={{ padding: "16px" }}>
          <TextPromptCard />
        </div>
      </Popover>
    </div>
  );
}
