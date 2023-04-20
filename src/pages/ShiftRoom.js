import React from 'react'
import Sidenav from '../SideNav';
import Box from '@mui/material/Box';
const ShiftRoom = () => {
  return (
    <>
     <Box sx={{ display: 'flex' }}>
       <Sidenav/>
      
       <Box component="main" sx={{ flexGrow: 1, p: 3,m:10 }}>
       <h1>Shift Patient Room </h1>
       </Box>
     </Box>
    </>
   )
}

export default ShiftRoom