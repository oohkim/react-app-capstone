import React from "react";
import Hero from "../../components/Hero/Hero";
import LatestPost from "../../components/LatestPost/LatestPost";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
    return (
      <>
        <Hero />
        <LatestPost />
        <Newsletter />
      </>
    );
  };
  
  export default Home;