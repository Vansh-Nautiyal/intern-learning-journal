import { Link } from "react-router-dom";
function Blogs({ blogList = [], onDelete }) {
  const sortedBlogs = [...blogList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const getAuthorName = (author) => {
    if (!author) return "Unknown author";
    if (typeof author === "string") return author;

    return author.username || author.email || "Unknown author";
  };

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
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="card border border-base-300 bg-base-100 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="card-body p-8">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title text-lg font-semibold">
                    {blog.title}
                  </h2>
                  <p className="text-sm opacity-60">
                    By {getAuthorName(blog.author)}
                  </p>
                </div>

                {isNewBlog(blog.createdAt) && (
                  <span className="badge badge-success badge-outline px-3 py-3 text-xs">
                    New
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-base-content/70 line-clamp-3">
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

                {onDelete && (
                  <>
                    <Link
                      to={`/edit/${blog._id}`}
                      className="btn btn-primary rounded-full"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-error shadow-none rounded-full"
                      onClick={() => onDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
