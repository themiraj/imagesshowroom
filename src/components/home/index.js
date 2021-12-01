import React from 'react'
import ImageContextProvider from '../../context/ImageContext'
import Imageslist from '../inc/Imageslist'
import Singleimage from '../inc/singleimage'
import { Grid } from '@mui/material'
import Cart from '../inc/Cart'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
const Home = () => {
    return (
        // <>
        <Router>
            <Grid container spacing={2}>
                <ImageContextProvider>
                    <Routes>
                        <Route path="/"  element={[
                            // <div>
                          
                               <Imageslist/>,
                               <Singleimage/>
                          
                            // </div>
                        ]}/>
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                </ImageContextProvider>
            </Grid>
        </Router>
        // </>
    )
}
export default Home;
