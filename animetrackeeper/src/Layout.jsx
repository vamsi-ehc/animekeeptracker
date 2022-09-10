import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './pages/profile'
import Signin from './pages/signin'

const Layout = () => {
  return (
    <>
    <Profile />

    <Box>
        <Outlet/>
    </Box>
    </>
  )
}

export default Layout