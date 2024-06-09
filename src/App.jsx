// /* eslint-disable no-unused-vars */
// Importing files
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from './Pages/Host/HostVanDetail';
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import "./server"

  function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { < Layout />}>
          <Route index element = {< Home />}/>
          <Route path = "about" element = {< About />}/> 
            <Route path = "vans" element = {< Vans />}/>
            <Route path = "vans/:id" element = {< VanDetail />}/>
          

          <Route path = "host" element = {< HostLayout />}>
            <Route index element = {< Dashboard />}/>
            <Route path = "income" element = {< Income />}/>
            <Route path = "reviews" element = {< Reviews />}/>
            <Route path = "vans" element = {< HostVans />}>
            <Route index element = {< HostVans />}/>
            <Route path = "vans/:id" element = {< HostVanDetail />}/>
            </Route>
          </Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}
export default App
