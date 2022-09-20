import React from 'react'
import {
    Container,
    Typography,
    Grid
}
from '@mui/material'
import TourCard from '../components/TourCard'
import cities from '../data.json'


function Home() {
  return (
    <Container sx={{marginTop:5}}>
    {cities.map((city)=>(
      <>
        <Typography
            variant='h4'
            component='h2'
            marginTop={5}
            marginBottom={3}
            >
          Top {city.name} Tours

        </Typography>   
        <Grid container spacing={5}>
          {city.tours.map((tour, index)=>(
                 <TourCard key={index} tour={tour}/>
          ))}
     
        </Grid>
      </>
    ))}

  </Container>
  )
}

export default Home