import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import BlogDetails from "./pages/BlogDetails";
import NewBlog from "./pages/NewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
