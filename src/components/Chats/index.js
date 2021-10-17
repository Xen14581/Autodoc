import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { getChats } from "../../actions/chat";
import noChats from "../../assets/doctors-animate.svg";

const Chats = ({ search }) => {
  const chat = useSelector((state) => state.chat.chats);
  // const chat = [
  //   {
  //     id: 0,
  //     name: "Matt Murdoc",
  //     slot: "10:00-10:30",
  //   },
  // ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(
      chat?.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [chat, search]);

  return (
    <>
      {chat.length === 0 ? (
        <Grid container direction="column">
          <Grid
            item
            xs={9}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <object
              type="image/svg+xml"
              data={noChats}
              style={{ height: "auto", width: "100%" }}
            >
              <img src={noChats} alt="No chats available" />
            </object>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography component="h2" variant="h5" xs={{ width: "50%" }}>
              No Appointments!
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <List
          sx={{
            width: "100%",
            height: "50vh",
            bgcolor: "background.paper",
            padding: "0",
          }}
        >
          <Divider />
          {filtered.map((d, index) => {
            return (
              <>
                <ListItemButton
                  selected={selectedIndex === index}
                  justifyContent="space-between"
                  divider
                  button
                  onClick={() => {
                    setSelectedIndex(index);
                    dispatch({ type: "SELECTEDCHAT", data: d });
                  }}
                  sx={{ padding: "3% 10%" }}
                >
                  <ListItemAvatar
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                      sx={{ width: 50, height: 50 }}
                    >
                      {d.name[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={d.name}
                    secondary={
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Appointment Timing: {d.slot}
                      </Typography>
                    }
                    sx={{ padding: "0 7%" }}
                  />
                </ListItemButton>
              </>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Chats;
