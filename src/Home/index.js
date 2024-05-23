import { useState, useEffect, React } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import Footer from "../Footer";
import Layout from "../Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  
  return (
    <Layout>
        <Carousel />
        <Card />
    </Layout>
  );
}
export default Home;
