import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function CreateBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  // Fetch existing blog if editing
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/blogs/${id}`
          );

          setBlog(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchBlog();
    }
  }, [id]);

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Edit existing blog
        await axios.put(
          `http://localhost:3000/api/blogs/${id}`,
          blog
        );
      } else {
        // Create new blog
        await axios.post(
          "http://localhost:3000/api/blogs",
          blog
        );
      }

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center bg-base-200">
        <div className="mt-10 card px-6 bg-base-100 shadow-xl w-full max-w-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-6">
              {id ? "Edit Blog" : "Create New Blog"}
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text mb-2">Blog Title</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  className="input input-bordered w-full"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text mb-2">Author</span>
                </label>

                <input
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  className="input input-bordered w-full"
                  value={blog.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="label">
                  <span className="label-text mb-2">Content</span>
                </label>

                <textarea
                  name="content"
                  placeholder="Write your blog..."
                  className="textarea textarea-bordered w-full h-52"
                  value={blog.content}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                {id ? "Update Blog" : "Publish Blog"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;