/* eslint-disable no-unused-vars */
// Importing files
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Login from "./Pages/Login.jsx";
import "./server"
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from './Pages/Host/HostVanDetail';
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import HostVanInfo from "./Pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./Pages/Host/HostVanPhotos.jsx";
import AuthRequired from "./Components/AuthRequired.jsx";
import NotFound from "./Pages/NotFound.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { < Layout />}>
          <Route index element = {< Home />}/>
          <Route path = "about" element = {< About />}/> 
          <Route path = "vans" element = {< Vans />}/>
          <Route path = "vans/:id" element = {< VanDetail />}/>
          <Route path="login" element={<Login />} />
          
          
          <Route element={<AuthRequired />}></Route>
            <Route path = "host" element = {< HostLayout />}>
              <Route index element = {< Dashboard />}/>
              <Route path = "income" element = {< Income />}/>
              <Route path = "reviews" element = {< Reviews />}/>
              <Route path = "vans" element = {< HostVans />}>
              <Route path = "vans/:id" element = {< HostVanDetail />}/>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

