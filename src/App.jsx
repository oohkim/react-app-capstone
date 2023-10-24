import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeWithHeaderAndFooter />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </AuthProvider>
  );
};

const HomeWithHeaderAndFooter = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
