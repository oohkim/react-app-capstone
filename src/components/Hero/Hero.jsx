import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

import image1 from "../../assets/wallpaper.jpg";
import image2 from "../../assets/wallpaper2.jpeg";

const Hero = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        title: "The Art of Capturing Moments: A Journey Through Photography",
        date: "October 20, 2023",
        category: "Photography",
        content: "Photography isn't just about individual images; it's about telling a story. Photojournalists, for example, use their craft to document events and convey powerful narratives. Every photograph is a story waiting to be shared.",
        image: image1,
        trending: true,
      },
      {
        title: "Blog 2",
        date: "2023-10-21",
        category: "Travel",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: image2,
        trending: true,
      },
    ];

    setBlogs(dummyData);
  }, []);

  const getTrendingBlogs = () => {
    return blogs.filter((blog) => blog.trending);
  };

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div>
      <h2 className="trending-title">Trending</h2>
      <Slider {...sliderSettings}>
        {getTrendingBlogs().map((blog, index) => (
          <div key={index} className="blog-slide">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-details">
              <p>Date posted: {blog.date}</p>
              <p>{blog.category}</p>
              <h3>"{blog.title}"</h3>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
