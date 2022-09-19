import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material'
import React, { useState } from 'react'
import {theme} from '../theme'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"

})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
    color:"gray"


}));

const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'></InputBase></Search>
        <Icons>
          <Badge  color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={2} color="primary">
            <Notifications/>
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Avatar 
            sx={{width:30, height:30}} 
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={()=>setOpen(true)}
            />
          
          </Badge>
        </Icons>
        <UserBox onClick={()=>setOpen(true)}>
            <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <Typography>John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={()=>setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={()=>setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={()=>setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar