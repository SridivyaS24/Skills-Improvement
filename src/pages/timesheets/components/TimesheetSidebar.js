import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";


const TimesheetSidebar = () => {
  const notifications = [
    {
      id: 0,
      avatarIcon: <Avatar />,
      name: "Diana R.Helmer",
      time: "Week:28-2",
    },
    {
      id: 1,
      avatarIcon: <Avatar />,
      name: "Bob Hunter",
      time: "Week:28-2",
    },
    {
      id: 2,
      avatarIcon: <Avatar />,
      name: "Justin Mitchell",
      time: "Week:28-2",
    },
    {
      id: 3,
      avatarIcon: <Avatar />,
      name: "Lloyd Collins",
      time: "Week:28-2",
    },
    {
      id: 4,
      avatarIcon: <Avatar />,
      name: "Eli M.Sullivan",
      time: "Week:28-2",
    },
    {
      id: 5,
      avatarIcon: <Avatar />,
      name: "Hannah Johnston",
      time: "Week:28-2",
    },
    {
      id: 6,
      avatarIcon: <Avatar />,
      name: "Misty Smith",
      time: "Week:28-2",
    },
    {
      id: 7,
      avatarIcon: <Avatar />,
      name: "Courtney Lane",
      time: "Week:28-2",
    },
    {
      id: 8,
      avatarIcon: <Avatar />,
      name: "Lloyd Collins",
      time: "Week:28-2",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <List>
        {notifications.map((item, index) => (
          <ListItem button key={item} divider>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>{item.avatarIcon}</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <ListItemText primary={item.name} secondary={item.time} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TimesheetSidebar;
