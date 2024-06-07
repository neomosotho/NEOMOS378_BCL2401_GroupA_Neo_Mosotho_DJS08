import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default funtion Layout() {
    return (
        <>
        <Header/>
        <outlet/>
        <h1>This is the Layout Route</h1>
        </>
    );
}