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
import Pagination from '../inc/pagination'
  
const Home = () => {
    return (
        // <>
        <Router>
            <Grid container spacing={2}>
                <ImageContextProvider>
                    <Routes>
                        <Route path="/imagesshowroom"  element={[
                            // <div>
                          
                               <Imageslist key={1}/>,
                               <Singleimage key={2}/>,
                               <Pagination key={3}/>
                          
                            // </div>
                        ]}/>
                        <Route path="/imagesshowroom/cart" element={<Cart/>} />
                    </Routes>
                </ImageContextProvider>
            </Grid>
        </Router>
        // </>
    )
}
export default Home;
