// Importing files
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Income from "./Income";
import Review from "./Review";

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
          <Route path = "/dashboard" element = {< Dashboard />}/>
          <Route path = "/income" element = {< Income />}/>
          <Route path = "/review" element = {< Review />}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}
export default App
