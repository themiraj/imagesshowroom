import React from 'react'
import Home from '../home'
import Footer from '../shared/footer'
import Header from '../shared/header'

export default function App() {
    return (
        <div>
            <Header/>
                <Home/>
            <Footer/>
        </div>
    )
}
