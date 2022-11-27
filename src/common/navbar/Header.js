import React from 'react'
import { Link } from "react-router-dom";
import {Toolbar,AppBar,useScrollTrigger} from '@mui/material';
import {Tabs,Tab} from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

function ElevationScroll(props) {
    const { children } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

const Header = (props) => {
    
    return (
        <ElevationScroll>
      <AppBar position="fixed" color="">
        <Toolbar>App Bar
            <Tabs>
                <Tab label="HOME" element={Link}/>
                <Tab label="CLIENTS" element={Link}/>
                <Tab label="CAREERS" element={Link}/>
                <Tab label="SCHEDULER" element={Link}/>
                <Tab label="TIMESHEETS" element={Link}/>
                <Tab label="MARKETING" element={Link}/>
            </Tabs>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    );
}

export default Header