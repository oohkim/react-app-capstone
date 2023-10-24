import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/wallpaper.jpg';
import image2 from '../../assets/wallpaper2.jpeg';
import './Hero.css';

const Hero = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        title: 'The Art of Capturing Moments: A Journey Through Photography',
        date: 'October 20, 2023',
        category: 'Photography',
        content:
          "Photography isn't just about individual images; it's about telling a story. Photojournalists, for example, use their craft to document events and convey powerful narratives. Every photograph is a story waiting to be shared.",
        image: image1,
        trending: true,
        author: 'John Doe',
      },
      {
        title: 'Blog 2',
        date: '2023-10-21',
        category: 'Travel',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: image2,
        trending: true,
        author: 'Jane Smith',
      },
      {
        title: 'Blog 3',
        date: '2023-10-21',
        category: 'Travel',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: image1,
        trending: true,
        author: 'Robert Johnson',
      },
    ];

    setBlogs(dummyData);
  }, []);

  const getTrendingBlogs = () => {
    return blogs.filter((blog) => blog.trending);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <Slider {...settings}>
      {getTrendingBlogs().map((blog, index) => (
        <div key={index} className="slider-slide">
          <div className="slide-content">
            <div className="slider-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="slider-details">
              <p className="date">Date Created: {blog.date}</p>
              <p className="author">Author: <span style={{ fontWeight: 'bold' }}>{blog.author}</span></p>
              <p className="category">Category: {blog.category}</p>
              <h2 className="title">"{blog.title}"</h2>
              <p className="content">{blog.content}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
