import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/posts`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Published Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
