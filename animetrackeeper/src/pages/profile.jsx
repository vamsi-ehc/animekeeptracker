import React from 'react'
import { Box, Button, Link, Stack, Typography } from '@mui/material'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import dbzLogo from '../Assets/images/DBZ.jpeg'

const Profile = () => {
  return (
    <>
    <Stack direction="row" sx={{display:"flex", justifyContent:"space-between", borderBottom:"2px solid #F4AA89", padding:"20px"}}>
      <Box>
        <AssignmentTurnedInIcon sx={{fontSize:"30px", marginTop:"-10px", color:"#002153"}}></AssignmentTurnedInIcon><Typography variant='h4' sx={{display:"inline-block", color:"#002153"}}>Anime To-Do List</Typography>
      </Box>
      {/* <Box component="img" src={dbzLogo} sx={{height:"50px", width:"100px"}}>

      </Box> */}
      
      {/* <Box>
        <Link to="/profile" sx={{border:"1px solid #000", padding:"10px"}}>Register</Link>
      
      </Box> */}
    
    </Stack>
   
    </>
  )
}

export default Profile