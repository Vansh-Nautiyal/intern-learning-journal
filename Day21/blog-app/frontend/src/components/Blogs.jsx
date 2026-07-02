import { Link } from "react-router-dom";

function Blogs({ blogList }) {
  return (
    <div className="p-10">
      <div className="grid md:grid-cols-3 gap-6">
        {blogList.map((blog) => (
          <div key={blog._id} className="card bg-base-100 shadow-white border-2">
            <div className="card-body p-10">
              <h2 className="card-title text-3xl">{blog.title}</h2>
              <p className="text-m">By {blog.author}</p>

              <p className="text-base">{blog.content.substring(0,100)} ....</p>

              <br />
              <div className="card-actions justify-end">
                <Link to = {`/blogs/${blog._id}`} className="btn btn-success">View Blog</Link>
                <button className="btn btn-error" onClick={()=>deleteBlog(blog._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;