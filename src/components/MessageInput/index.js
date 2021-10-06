import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ socket }) => {
  const [text, setText] = useState("");
  const [pres, setPres] = useState(false);
  const [note, setNote] = useState(false);

  const handleSubmit = () => {
    if (text !== "") {
      if (pres) {
        console.log(`Prescription: ${text}`);
      } else if (note) {
        console.log(`Note: ${text}`);
      } else {
        console.log(`Message: ${text}`)
      }
    }
  };

  return (
    <>
      <IconButton
        size="large"
        onClick={() => {
          setPres(!pres);
          setNote(false);
        }}
        style={{ background: pres ? "#ffffff" : "" }}
      >
        <Tooltip title="Add Prescription">
          <BubbleChartIcon />
        </Tooltip>
      </IconButton>
      <IconButton
        size="large"
        onClick={() => {
          setNote(!note);
          setPres(false);
        }}
        style={{ background: note ? "#ffffff" : "" }}
      >
        <Tooltip title="Add Note">
          <ContentPasteIcon />
        </Tooltip>
      </IconButton>
      <TextField
        id="outlined-search"
        placeholder={
          pres ? "Add Prescriptions" : note ? "Add Notes" : "Type a message"
        }
        type="text"
        style={{ width: "83%", background: "white" }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <IconButton
        size="large"
        onClick={() => {
          handleSubmit();
        }}
      >
        <SendIcon />
      </IconButton>
    </>
  );
};

export default MessageInput;
