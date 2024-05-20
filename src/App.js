import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sedes from "./Sedes";
import Tienda from "./Tienda";
import Home from "./Home";

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/Tienda',element: <Tienda/>},
    {path: '/Sedes',element: <Sedes/>}
  ])
    return routes
}
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}
export default App;
