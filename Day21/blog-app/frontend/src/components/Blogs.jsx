import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


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
    <div className="page-container pb-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="card premium-card overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl"
          >
            <div className="card-body gap-5 px-8 py-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h1 className="card-title line-clamp-2 text-2xl font-semibold leading-snug">
                    {blog.title}
                  </h1>
                  <p className="mt-1 text-sm text-base-content/60">
                    By {getAuthorName(blog.author)}
                  </p>
                </div>

                {isNewBlog(blog.createdAt) && (
                  <span className="badge badge-success shrink-0 px-3 py-3 text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              <div className="border-t border-base-content/10" />

              <p className="line-clamp-3 text-sm leading-7 text-base-content/70">
                {blog.content.substring(0, 200)} ....
              </p>

              <div className="card-actions mt-auto justify-end gap-2">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="btn btn-primary rounded-xl shadow-lg shadow-primary/20"
                >
                  Read Blog
                </Link>

                {onDelete && (
                  <>
                    <Link
                      to={`/edit/${blog._id}`}
                      className="btn btn-outline btn-primary rounded-xl"
                    >
                      <AiFillEdit className="h-5 w-5" />
                      Edit
                    </Link>

                    <button
                      className="btn btn-error rounded-xl text-white shadow-none"
                      onClick={() => onDelete(blog._id)}
                    >
                      <AiFillDelete className="h-5 w-5" />
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
