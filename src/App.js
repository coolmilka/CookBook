import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'

import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import FullScreenCircuralProgress from './components/FullScreenCircuralProgress'
import ScrollToTop from './components/ScrollToTop'
import Snackbars from './components/Snackbars'


const App = props => {
    return(
        <div>
            <BrowserRouter>
                <AppBar />
                <Drawer />
            </BrowserRouter>
            <FullScreenCircuralProgress />
            <Snackbars />
            <ScrollToTop />
        </div>
    )
}

export default App