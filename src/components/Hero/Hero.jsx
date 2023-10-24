import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/hero1.jpeg";
import image2 from "../../assets/hero2.jpeg";
import image3 from "../../assets/hero3.jpeg";
import "./Hero.css";

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
        author: "John Doe",
      },
      {
        title: "Fashion Trends for 2023",
        date: "July 15, 2022",
        category: "Fashion",
        content:
          "Explore the captivating fashion trends of 2023. From vibrant colors to sustainable fashion, stay ahead in the fashion game and make a style statement. Learn how to mix and match outfits, embrace comfort and elegance, and express your unique flair. Discover must-have pieces and accessories to stand out at any event. Fashion is self-expression; make 2023 your most stylish year yet!",
        image: image2,
        trending: true,
        author: "Elizabeth Smith",
      },
      {
        title: "Exploring Culinary Delights",
        date: "January 18, 2023",
        category: "Food",
        content:
          "Embark on a culinary adventure with us. From delectable recipes to cultural insights, we'll explore the world of food and cooking. Discover mouthwatering dishes, cooking tips, and stories that celebrate the joy of food.\n\nSavor unique flavors and appreciate diverse cuisines. Join us in this delightful journey where food becomes an experience.",
        image: image3,
        trending: true,
        author: "Robert Johnson",
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
              <p className="date">{blog.date}</p>
              <p className="popular-post-details">
                <span className="gray-text">by</span>{" "}
                <span className="popular-post-author">{blog.author}</span>{" "}
                <span className="gray-text">in</span>{" "}
                <span className="popular-post-category">{blog.category}</span>
              </p>
              <h2 className="title">"{blog.title}"</h2>
              <p className="content">{blog.content}</p>
              <a href="#" className="read-more">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
