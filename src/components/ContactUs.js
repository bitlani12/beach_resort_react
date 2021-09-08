import React from "react";
import defaultImg from "../images/room-1.jpeg";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";
import Hero from "./Hero";

const ContactUs = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Contact Us"
          subtitle="Created by i5 Softwares"
        >
          <Link to="/rooms" className="btn-primary">
            Submitted to Compucom Institute of Information Technology
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default ContactUs;
