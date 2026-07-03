import { Link } from "react-router-dom";

function Blogs({ blogList, onDelete }) {
  // Check if blog was created within the last 2 days
  const isNewBlog = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();

    const differenceInMs = currentDate - createdDate;
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    return differenceInDays <= 2;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map((blog) => (
          <div
            key={blog._id}
            className="card blog-card rounded-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="card-body p-8">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title text-lg font-semibold">
                    {blog.title}
                  </h2>
                  <p className="text-sm opacity-60">By {blog.author}</p>
                </div>

                {isNewBlog(blog.createdAt) && (
                  <span className="badge border-none text-xs bg-green-500/20 text-green-600 px-3 py-3 rounded-full">
                    New
                  </span>
                )}
              </div>

              <p className="text-sm blog-card-excerpt leading-relaxed line-clamp-3">
                {blog.content.substring(0, 100)} ....
              </p>

              <br />

              <div className="card-actions justify-end">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="btn btn-success shadow-none rounded-full"
                >
                  View Blog
                </Link>

                <button
                  className="btn btn-error shadow-none rounded-full"
                  onClick={() => onDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
