import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

const MessageInput = ({ socket }) => {
  const user = useSelector((state) => state.auth);
  const selected = useSelector((state) => state.chat.selected);
  const [text, setText] = useState("");
  const [pres, setPres] = useState(false);
  const [note, setNote] = useState(false);

  const handleSubmit = () => {
    if (text !== "") {
      if (pres) {
        socket.emit("new message", selected._id, text, "pres", user._id);
      } else if (note) {
        socket.emit("new message", selected._id, text, "note", user._id);
      } else {
        socket.emit("new message", selected._id, text, "text", user._id);
      }
    }
    setText("");
  };

  return (
    <>
      {user._id === selected.participants.doctor_id._id && (
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
        </>
      )}
      <TextField
        id="outlined-search"
        value={text}
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
