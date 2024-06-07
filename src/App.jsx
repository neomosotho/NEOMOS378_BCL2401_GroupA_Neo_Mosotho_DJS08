// Importing files
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
// import Dashboard from "./Host/Dashboard";
import Income from "./Pages/Host/Income";
import Review from "./Pages/Host/Review";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

import "./server"

  function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element = { < Layout />}>
          <Route path = "/" element = {< Home />}/>
          <Route path = "/about" element = {< About />}/> 
          <Route path = "/vans" element = {< Vans />}/>
          <Route path = "/vans/:id" element = {< VanDetail />}/>



          <Route path = "/host" element = {< HostLayout />}>
            <Route path = "/host/income" element = {< Income />}/>
            
            <Route path = "/host/review" element = {< Review />}/>
          </Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}
export default App
