import React, { useState, useEffect } from "react";
import "./Hero.css";
import image1 from "../../assets/wallpaper.jpg";
import image2 from "../../assets/wallpaper2.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        title: "The Art of Capturing Moments: A Journey Through Photography",
        date: "October 20, 2023",
        category: "Photography",
        content:
          "Photography isn't just about individual images; it's about telling a story. Photojournalists, for example, use their craft to document events and convey powerful narratives. Every photograph is a story waiting to be shared.",
        image: image1,
        trending: true,
      },
      {
        title: "Blog 2",
        date: "2023-10-21",
        category: "Travel",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: image2,
        trending: true,
      },
    ];

    setBlogs(dummyData);
  }, []);

  const getTrendingBlogs = () => {
    return blogs.filter((blog) => blog.trending);
  };

  return (
    <div>
      <h2 className="trending-title">Trending</h2>
      <Carousel>
        {getTrendingBlogs().map((blog, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={blog.image}
              alt={blog.title}
            />
            <Carousel.Caption>
              <p>Date posted: {blog.date}</p>
              <p>{blog.category}</p>
              <h3>"{blog.title}"</h3>
              <p>{blog.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
