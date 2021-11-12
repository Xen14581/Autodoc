import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useSelector, useDispatch } from "react-redux";

const Messages = ({ socket }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.chat.selected);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    socket.emit("getmessages", selected._id);
    socket.on("newmessage", (messages) => {
      if (messages._id === selected._id) {
        dispatch({ type: "ALLMESSAGE", data: messages.messages });
      }
    });
    socket.on("messages", (messages) => {
      if (messages._id === selected._id) {
        dispatch({ type: "ALLMESSAGE", data: messages.messages });
      }
    });
  }, [socket, dispatch, selected._id]);

  return (
    <>
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
            padding: 0,
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
            {selected.messages.map((m, index) => {
              return (
                <React.Fragment key={index}>
                  {m.sender_id !== user._id ? (
                    <Paper
                      sx={{
                        margin: "0.5% 0",
                        maxWidth: "70%",
                        padding: "1%",
                        alignSelf: "flex-start",
                        borderRadius: "0px 15px 15px 15px",
                      }}
                    >
                      {
                      m.type === "text" ? (
                        <Typography
                          variant="body1"
                          component="span"
                          style={{ wordBreak: "break-word" }}
                        >
                          {m.message}
                        </Typography>
                      ) : 
                      m.type === "pres" ? (
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
                            <BubbleChartIcon sx={{ marginLeft: "1%" }} />
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
                            <ContentPasteIcon sx={{ marginLeft: "1%" }} />
                          </Tooltip>
                        </div>
                      )}
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
                        borderRadius: "15px 0 15px 15px",
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
                      ) : m.type === "pres" ? (
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
                            <BubbleChartIcon sx={{ marginLeft: "1%" }} />
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
                            <ContentPasteIcon sx={{ marginLeft: "1%" }} />
                          </Tooltip>
                        </div>
                      )}
                    </Paper>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Container>
      </Paper>
    </>
  );
};

export default Messages;
