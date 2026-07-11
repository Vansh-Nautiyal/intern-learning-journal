import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { CiRead } from "react-icons/ci";
import {
  formatRelativeCreatedTime,
  isWithinLastHours,
} from "../utils/dateUtils";

function Blogs({ blogList = [], onDelete }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 60 * 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const sortedBlogs = [...blogList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const getAuthorName = (author) => {
    if (!author) return "Unknown author";
    if (typeof author === "string") return author;

    return author.username || author.email || "Unknown author";
  };

  return (
    <div className="page-container pb-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
                  <p className="mt-1 text-xs text-base-content/50">
                    {formatRelativeCreatedTime(blog.createdAt, now)}
                  </p>
                </div>

                {isWithinLastHours(blog.createdAt, 48, now) && (
                  <span className="badge badge-success shrink-0 px-3 py-3 text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              <div className="border-t border-base-content/10" />
              <p className="line-clamp-3 text-sm leading-7 text-base-content/70">
                {blog.content.substring(0, 200)} ....
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {blog.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-4  py-2 text-xs font-medium text-violet-500 border border-primary/30"
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                ))}
              </div>

              <div className="card-actions mt-auto justify-end gap-2">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="btn btn-primary rounded-xl shadow-none"
                >
                  <CiRead/>
                  Read
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
