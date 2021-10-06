import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const Messages = ({ socket }) => {
  // const [messages, setMessages] = useState({});

  const messages = [
    {
      sent: new Date(),
      from: "Doctor",
      type: "text",
      message:
        "Hello. This is your friendly family doctor. I'm here for helping you out and treating you. I'll recommend you some things and write a note for later use.",
    },
    {
      sent: new Date(),
      from: "Doctor",
      type: "prescription",
      message:
        "Ibuprofin, Anaesthetic, Boiled water, Steam, Sauna, Trip to resort",
    },
    {
      sent: new Date(),
      from: "Doctor",
      type: "note",
      message: "Common Cold",
    },
    {
      sent: new Date(),
      from: "Patient",
      type: "text",
      message: "Thanks",
    },
  ]

  // useEffect(() => {
  //   const messageListener = (message) => {
  //     setMessages((prevMessages) => {
  //       const newMessages = { ...prevMessages };
  //       newMessages[message.id] = message;
  //       return newMessages;
  //     });
  //   };

  //   const deleteMessageListener = (messageID) => {
  //     setMessages((prevMessages) => {
  //       const newMessages = { ...prevMessages };
  //       delete newMessages[messageID];
  //       return newMessages;
  //     });
  //   };

  //   socket.on("message", messageListener);
  //   socket.on("deleteMessage", deleteMessageListener);
  //   socket.emit("getMessages");

  //   return () => {
  //     socket.off("message", messageListener);
  //     socket.off("deleteMessage", deleteMessageListener);
  //   };
  // }, [socket, setMessages]);

  return (
    <>
      {/* {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => 
        ( */}
          <Paper
          elevation={0}
          sx={{
            height: "98%",
            width: "98%",
            background: "transparent",
            margin: 0,
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "100%",
              background: "transparent",
              padding: 0
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50vh",
                padding: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {messages.map((m) => {
                return (
                  <>
                    {m.from === "Patient" ? (
                      <Paper
                        sx={{
                          margin: "0.5% 0",
                          maxWidth: "70%",
                          padding: "1%",
                          alignSelf: "flex-start",
                          borderRadius: '0px 15px 15px 15px',
                        }}
                      >
                        <Typography
                          variant="body1"
                          component="span"
                          style={{ wordWrap: "break-word" }}
                        >
                          {m.message}
                        </Typography>
                      </Paper>
                    ) : (
                      <Paper
                        sx={{
                          margin: "0.5% 0",
                          maxWidth: "70%",
                          padding: "1%",
                          alignSelf: "flex-end",
                          backgroundColor: "#00bbff",
                          color: "white",
                          borderRadius: '15px 0 15px 15px',
                        }}
                      >
                        {m.type === "text" ? (
                          <Typography
                            variant="body1"
                            component="span"
                            style={{ wordBreak: "break-word" }}
                          >
                            {m.message}
                          </Typography>
                        ) : m.type === "prescription" ? (
                          <div style={{ display: "flex" }}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{
                                wordBreak: "break-word",
                              }}
                            >
                              {m.message}
                            </Typography>
                            <Tooltip title="Prescription">
                              <BubbleChartIcon
                                sx={{ marginLeft: "1%" }}
                              />
                            </Tooltip>
                          </div>
                        ) : (
                          <div style={{ display: "flex" }}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{
                                wordBreak: "break-word",
                              }}
                            >
                              {m.message}
                            </Typography>
                            <Tooltip title="Note">
                              <ContentPasteIcon
                                sx={{ marginLeft: "1%" }}
                              />
                            </Tooltip>
                          </div>
                        )}
                      </Paper>
                    )}
                  </>
                );
              })}
            </div>
          </Container>
        </Paper>
        {/* )
        )} */}
    </>
  );
};

export default Messages;
