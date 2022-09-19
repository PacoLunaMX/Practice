import React from 'react'
import {Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox} from '@mui/material'
import { MoreVert, Favorite, FavoriteBorder } from '@mui/icons-material'

function Post() {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
    avatar={
      <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert/>
      </IconButton>
    }
    title="Shtimp and Chorizo Paella"
    subheader="September 14, 2016"
    
    />
    <CardMedia 
    componnent="img"
    height="20%"
    image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
            This is impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels, if you like

        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
        </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post