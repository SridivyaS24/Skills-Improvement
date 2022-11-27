import React from "react";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TimesheetSidebar from "./TimesheetSidebar";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
// import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export const TimesheetBody = () => {
  return (
    <>
    <Box sx={{ display: "flex",marginTop:"0px" }}>
      <TimesheetSidebar />
      <Divider />
      <AppBar position="static" color="" sx={{ marginLeft: "20px", marginBottom: "20px" , width: 1300,
        height: 100, }}>
        <Toolbar variant="dense" sx={{ marginTop: "20px" }}>
          <Grid container wrap="nowrap" spacing={8}>
            <Grid item>
              <Typography variant="h6">Week 14-20 july 2016</Typography>
            </Grid>
            <Grid item xs zeroMinWidth>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography>Diana R.Helmer</Typography>
              </IconButton>
            </Grid>
            <Grid item xs zeroMinWidth>
              <TextField
                id="outlined-select"
                select
                label="Export Sheet"
                helperText="Please select"
              ></TextField>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Button variant="contained">Approve</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
     <Box sx={{ display: "flex",marginTop:"0px" }}>
<TimesheetBody/>
     </Box>
     </>
  );
};
