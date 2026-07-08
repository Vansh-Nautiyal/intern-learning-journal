function Stats({ blogList }) {
  const wordCount = blogList.reduce((total, blog) => {
    const words = blog.content.trim().split(/\s+/).length;
    return total + words;
  }, 0);
  return (
    <div className="stats stats-vertical w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl shadow-neutral/10 lg:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="stat-title text-violet-500 font-bold">My Blogs</div>
        <div className="stat-value text-base-content">{blogList.length}</div>
        <div className="stat-desc">Total Blog Count</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <div className="stat-title text-violet-500 font-bold">Word Count</div>
        <div className="stat-value text-base-content">{wordCount}</div>
        <div className="stat-desc">Total words in all blogs</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
        <div className="stat-title text-violet-500 font-bold">Average Post Length</div>
        <div className="stat-value text-base-content">{wordCount/blogList.length}</div>
        <div className="stat-desc">Average length of each blog post</div>
      </div>
    </div>
  );
}

export default Stats;
