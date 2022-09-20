import React from "react";
import {Container, Typography, Box, BottomNavigation, Paper} from '@mui/material'
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian"
import BasicModal from '../components/Modal'

function Tour(){
    return (
    <Container sx={{widht: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display:"flex"}}>
            <img src="https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg" alt="" height={325}/>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius sed laborum soluta aut, libero perferendis neque non sint itaque delectus rerum veniam dolorem, accusamus quam natus doloribus quidem quasi!
            </Typography>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                Frequently Ask Questions
            </Typography>
            <Accordian></Accordian>
        </Box>
        <Paper 
        sx={{
            position:'fixed',
            bottom: 0,
            left:0,
            right:0

        }}
        elevation={3}
        >
            <BottomNavigation>
                    <BasicModal></BasicModal>
            </BottomNavigation>
        </Paper>
    </Container>)
}

export default Tour;