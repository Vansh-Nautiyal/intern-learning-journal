import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/blogs/${id}`);

      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>

        <p className="text-gray-500 mb-8">By {blog.author}</p>

        <p className="text-lg leading-8">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
