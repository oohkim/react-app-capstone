import React, { useState } from "react";
import "./LatestPost.css";
import ReactPaginate from "react-paginate";
import image1 from "../../assets/post1.jpeg";
import image2 from "../../assets/post2.webp";
import image3 from "../../assets/post3.jpeg";
import image4 from "../../assets/post4.jpeg";
import image5 from "../../assets/post5.webp";
import image6 from "../../assets/post6.jpeg";
import image7 from "../../assets/post7.jpeg";
import image8 from "../../assets/post8.jpeg";
import image9 from "../../assets/post9.jpeg";
import image10 from "../../assets/post10.jpeg";
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpeg";
import user3 from "../../assets/user3.webp";
import user4 from "../../assets/user4.jpeg";

const LatestPosts = () => {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);

  const latestPosts = [
    {
      id: 1,
      title: "The Art of Baking Perfect Sourdough Bread",
      author: "Alice Johnson",
      date: "November 5, 2023",
      image: image1,
      likes: 100,
      comments: 30,
    },
    {
      id: 2,
      title: "Exploring Local Cuisine: A Food Lover's Journey",
      author: "Bob Smith",
      date: "November 10, 2023",
      image: image2,
      likes: 10,
      comments: 2,
    },
    {
      id: 3,
      title:
        "Exploring the Cutting-Edge: Tech Trends and Innovations to Keep an Eye On in 2024",
      author: "Eva Martinez",
      date: "November 15, 2023",
      image: image3,
      likes: 45,
      comments: 12,
    },
    {
      id: 4,
      title: "Traveling Off the Beaten Path: Hidden Gems",
      author: "David Brown",
      date: "November 20, 2023",
      image: image4,
      likes: 112,
      comments: 14,
    },
    {
      id: 5,
      title: "Fitness and Well-being: Your Path to a Healthier Life",
      author: "Grace Wilson",
      date: "November 25, 2023",
      image: image5,
      likes: 76,
      comments: 5,
    },
    {
      id: 6,
      title: "Eco-Friendly Living: Sustainable Choices for Every Day",
      author: "Liam Anderson",
      date: "November 30, 2023",
      image: image6,
      likes: 36,
      comments: 11,
    },
    {
      id: 7,
      title: "Career Growth Strategies: Advancing in Your Job",
      author: "Olivia White",
      date: "December 5, 2023",
      image: image7,
      likes: 244,
      comments: 53,
    },
    {
      id: 8,
      title: "Fashion Trends for the Upcoming Season",
      author: "Mason Lee",
      date: "December 10, 2023",
      image: image8,
      likes: 88,
      comments: 9,
    },
    {
      id: 9,
      title: "Exploring Cultural Diversity: A Journey Through India",
      author: "Chloe Thomas",
      date: "December 15, 2023",
      image: image9,
      likes: 23,
      comments: 7,
    },
    {
      id: 10,
      title: "Art and Creativity: Finding Inspiration in Nature",
      author: "James Harris",
      date: "December 20, 2023",
      image: image10,
      likes: 560,
      comments: 92,
    },
  ];

  const offset = currentPage * postsPerPage;
  const currentPosts = latestPosts.slice(offset, offset + postsPerPage);

  const pageCount = Math.ceil(latestPosts.length / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const suggestedUsers = [
    {
      id: 1,
      name: "Sophia Davis",
      avatar: user1,
      articlesWritten: 25,
    },
    {
      id: 2,
      name: "Ethan Turner",
      avatar: user2,
      articlesWritten: 18,
    },
    {
      id: 3,
      name: "Emma White",
      avatar: user3,
      articlesWritten: 27,
    },
    {
      id: 4,
      name: "Oliver Brown",
      avatar: user4,
      articlesWritten: 22,
    },
  ];

  const mostLikedBlogs = [
    {
      id: 1,
      title: "Unlocking Success: The Art of Achieving Work-Life Balance",
      author: "Sophia Davis",
      category: "Career",
      likes: 210,
      date: "November 15, 2023",
    },
    {
      id: 2,
      title: "The Essence of Photography: Capturing Life's Moments",
      author: "Ethan Turner",
      category: "Photography",
      likes: 145,
      date: "November 20, 2023",
    },
    {
      id: 3,
      title: "Nature's Canvas: Drawing Inspiration from the Great Outdoors",
      author: "Emma White",
      category: "Art",
      likes: 185,
      date: "November 25, 2023",
    },
  ];

  return (
    <div>
      <div className="latest-posts-title">
        <h2>Latest Posts</h2>
      </div>
      <div className="container">
        <div className="latest-posts">
          {latestPosts.map((post) => (
            <div className="post-card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="post-details">
                <p className="post-date">{post.date}</p>
                <p className="post-author">
                  by <strong>{post.author}</strong>
                </p>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-interactions">
                  <div className="post-likes">
                    <i className="bx bx-heart"></i> {post.likes} Likes
                  </div>
                  <div className="post-comments">
                    <i className="bx bx-message-square-detail"></i>{" "}
                    {post.comments} Comments
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="suggested-users">
          <h2 className="suggested-users-title">Suggested Users</h2>
          <div className="user-list">
            {suggestedUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-avatar">
                  <img src={user.avatar} alt={user.name} />
                </div>
                <div className="user-details">
                  <p className="user-name">{user.name}</p>
                  <p className="articles-written">
                    {user.articlesWritten} Blogs Published
                  </p>
                </div>
                <button className="view-profile-button">View Profile</button>
              </div>
            ))}
            <div className="popular-posts">
              <h2 className="popular-posts-title">Most Liked Blogs</h2>
              <div className="popular-posts-list">
                {mostLikedBlogs.map((blog) => (
                  <div className="popular-post" key={blog.id}>
                    <h3 className="popular-post-title">"{blog.title}"</h3>
                    <p className="popular-post-details">
                      <span className="gray-text">by</span>{" "}
                      <span className="popular-post-author">{blog.author}</span>{" "}
                      <span className="gray-text">in</span>{" "}
                      <span className="popular-post-category">
                        {blog.category}
                      </span>
                    </p>
                    <p className="popular-post-likes">{blog.likes} Likes</p>
                    <p className="popular-post-date">{blog.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h2 className="tags-title">Tags</h2>
          <div className="tags">
            <div className="tag-buttons">
              <button className="tag-button">Travel</button>
              <button className="tag-button">Food</button>
              <button className="tag-button">Adventure</button>
              <button className="tag-button">Lifestyle</button>
              <button className="tag-button">Fashion</button>
              <button className="tag-button">Business</button>
              <button className="tag-button">Freelancing</button>
              <button className="tag-button">Sports</button>
              <button className="tag-button">Politics</button>
              <button className="tag-button">Health</button>
            </div>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={
          <i
            className="bx bx-chevron-left"
            style={{ fontSize: "30px", color: "#2a7075" }}
          ></i>
        }
        nextLabel={
          <i
            className="bx bx-chevron-right"
            style={{ fontSize: "30px", color: "#2a7075" }}
          ></i>
        }
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default LatestPosts;
