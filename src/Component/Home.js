import Navbar from "./Navbar";
import axios from "axios";
import { useState,useEffect } from "react";
import NavList from "./NavList";
import './Home.css';
import Posters from "./Posters";
import Product from "./Product";
import Footer from "./Footer";
import Advertise from "./Advertise/Advertise";
import Offer from "./Advertise/Offer";

function Home() {
  return (
    <div className="bg">
      <Navbar/>
      <NavList/>
      <Posters/>
      <Advertise/>
      <Offer/>
      <Footer/>
    </div>

  );
}
export default Home;
