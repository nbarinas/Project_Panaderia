import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sedes from "./Sedes";
import Tienda from "./Menu";
import Home from "./Home";
import MyOrder from "./MyOrder";
import NavBar from "./NavBar";

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/Menu',element: <Tienda/>},
    {path: '/MyOrder',element: <MyOrder/>},
    {path: '/Sedes',element: <Sedes/>}
  ])
    return routes
}
const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      
    </BrowserRouter>
  )
}
export default App;
