import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Person } from 'react-bootstrap-icons';
import { Search } from "react-bootstrap-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const Header = () => {
  const navigate = useNavigate();
  const [showEditor, setShowEditor] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleShowEditor = () => {
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
    setBlogTitle("");
    setBlogContent("");
    setError("");
  };

  const handlePublishBlog = () => {
    if (!blogTitle || !blogContent) {
      setError("Blog title and content are required.");
      return;
    }

    setLoading(true);
    setError("");

    axios
      .post(`${apiUrl}/api/posts`, {
        title: blogTitle,
        content: blogContent,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log("Blog post created: ", response.data);
        handleCloseEditor();
        navigate('/blogs');
      })
      .catch((error) => {
        console.error("Error creating blog post: ", error);
        setError("An error occurred while publishing the blog.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="left-part">
          <div className="search-bar">
            <Search className="search-icon" />
            <FormControl
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>
        <Navbar.Brand href="#home" className="center-logo">
          <i className="bx bx-pen pen-icon"></i>
          <span style={{ color: '#73C1C6' }}>Write</span>Scape
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Photography</NavDropdown.Item>
              <NavDropdown.Item href="#">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#">Business</NavDropdown.Item>
              <NavDropdown.Item href="#">Technology</NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="outline-light write-button"
              onClick={handleShowEditor}
            >
              Write
            </Button>
            {isAuthenticated ? (
              <Button
                variant="outline-light"
                className="login-button"
                onClick={handleLogout}
              >
                <Person size={20} style={{ color: 'white' }} /> Logout
              </Button>
            ) : (
              <Button variant="outline-light" className="login-button">
                <Link to="/login">
                  <Person size={20} style={{ color: 'white' }} /> Login
                </Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showEditor} onHide={handleCloseEditor}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="blogTitle">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="blogCategory">
              <Form.Label>Blog Category</Form.Label>
              <Form.Control as="select">
                <option>Select Category</option>
                <option>Photography</option>
                <option>Fashion</option>
                <option>Business</option>
                <option>Technology</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="blogContent">
              <Form.Label>Blog Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your blog content here"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="blogImage">
              <Form.Label>Blog Image (Optional)</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => {}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditor}>
            Close
          </Button>
          <Button
              variant="primary"
              onClick={handlePublishBlog}
              disabled={loading}
            >
              {loading ? "Publishing..." : "Publish"}
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;