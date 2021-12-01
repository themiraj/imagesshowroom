import React from 'react'
import ImageContextProvider from '../../context/ImageContext'
import Imageslist from '../inc/Imageslist'
import Singleimage from '../inc/singleimage'
import { Grid } from '@mui/material'
const Home = () => {
    return (
        <>
            <Grid container spacing={2}>
                <ImageContextProvider>
                    <Imageslist/>
                    <Singleimage/>
                </ImageContextProvider>
            </Grid>
        </>
    )
}
export default Home;
