import React from 'react'
import Box from '@mui/material/Box';
import TimesheetHeader from './components/TimesheetHeader';
import TimesheetSidebar from './components/TimesheetSidebar';
import { TimesheetBody } from './components/TimesheetBody';
import { Divider } from '@mui/material';

const TimesheetsMain = () => {

  return (
    <div>
        <TimesheetHeader/>
        {/* <Box sx={{
          marginTop: 300,
        width: 250,
        height: 250,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}> */}
  
        <TimesheetBody/>    
        
    </div>
  )
}

export default TimesheetsMain