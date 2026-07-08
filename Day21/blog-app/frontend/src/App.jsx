import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import BlogDetails from "./pages/BlogDetails";
import NewBlog from "./pages/NewBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<NewBlog />} />
        <Route path="/edit/:id" element={<NewBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
