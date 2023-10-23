import React from "react";
import "./LatestPost.css";
import image1 from "../../assets/wallpaper.jpg";
import image2 from "../../assets/wallpaper2.jpeg";
import user1 from "../../assets/head.jpeg";

const LatestPosts = () => {
  const latestPosts = [
    {
      id: 1,
      title: "Lorem Ipsum Post 1",
      author: "John Doe",
      date: "October 10, 2023",
      image: image1,
    },
    {
      id: 2,
      title: "Lorem Ipsum Post 2",
      author: "Jane Smith",
      date: "October 15, 2023",
      image: image2,
    },
    {
      id: 3,
      title: "Lorem Ipsum Post 1",
      author: "John Doe",
      date: "October 10, 2023",
      image: image1,
    },
    {
      id: 4,
      title: "Lorem Ipsum Post 2",
      author: "Jane Smith",
      date: "October 15, 2023",
      image: image2,
    },
    {
      id: 5,
      title: "Lorem Ipsum Post 1",
      author: "John Doe",
      date: "October 10, 2023",
      image: image1,
    },
    {
      id: 6,
      title: "Lorem Ipsum Post 2",
      author: "Jane Smith",
      date: "October 15, 2023",
      image: image2,
    },
  ];

  const suggestedUsers = [
    {
      id: 1,
      name: "User 1",
      avatar: user1,
      articlesWritten: 10,
    },
    {
      id: 2,
      name: "User 2",
      avatar: user1,
      articlesWritten: 15,
    },
    {
      id: 3,
      name: "User 3",
      avatar: user1,
      articlesWritten: 15,
    },
    {
      id: 4,
      name: "User 4",
      avatar: user1,
      articlesWritten: 15,
    },
  ];

  const mostLikedBlogs = [
    {
      id: 1,
      title: "Balancing Work and Life: A Guide to Achieving Harmony",
      author: "Author 1",
      category: "Lifestyle",
      likes: 100,
      date: "October 1, 2023",
    },
    {
      id: 2,
      title: "Most Liked Blog 2",
      author: "Author 2",
      category: "Food",
      likes: 85,
      date: "October 5, 2023",
    },
    {
      id: 3,
      title: "Most Liked Blog 3",
      author: "Author 2",
      category: "Politics",
      likes: 150,
      date: "October 5, 2023",
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
                <p className="post-author">By {post.author}</p>
                <h3 className="post-title">{post.title}</h3>
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
                    <h3 className="popular-post-title">{blog.title}</h3>
                    <p className="popular-post-details">
                      By{" "}
                      <span className="popular-post-author">{blog.author}</span>{" "}
                      in{" "}
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
    </div>
  );
};

export default LatestPosts;
