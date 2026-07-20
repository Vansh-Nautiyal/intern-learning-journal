import { useEffect, useState } from "react";
import api from "../utils/api";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";

function Feed() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const params = new URLSearchParams();

        if (selectedTag !== "all") {
          params.append("tag", selectedTag);
        }

        if (debouncedSearch.trim() !== "") {
          params.append("search", debouncedSearch);
        }

        const url = params.toString() === "" ? "/api/blogs" : `/api/blogs?${params.toString()}`;
        const res = await api.get(url);

        setBlogs(res.data);
        if (selectedTag === "all" && debouncedSearch.trim() === "") {
          const uniqueTags = [
            ...new Set(res.data.flatMap((blog) => blog.tags || [])),
          ];

          setAllTags(uniqueTags);
        }
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Could not load blogs.",
        );
      }
    };

    fetchBlogs();
  }, [selectedTag, debouncedSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const visibleTags = allTags.slice(0, 9);
  const hiddenTags = allTags.slice(9);
  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-container">
        <div className="mt-12 mb-10">
          <h1 className="mt-2 text-center text-3xl font-bold tracking-tight uppercase sm:text-4xl text-primary">
            Public Feed
          </h1>
          <p className="text-lg pt-4 pb-4 text-center font-semibold tracking-wide text-secondary">
            Explore Blogs posted by other bloggers
          </p>
        </div>

        {error && (
          <div className="alert alert-error text-sm mb-6 py-2">
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="flex justify-center mb-8">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-2xl px-6">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            className="grow"
            placeholder="Search blogs by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-8 mx-6">
        {/* All Button */}
        <button
          className={`btn btn-sm rounded-full ${
            selectedTag === "all" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setSelectedTag("all")}
        >
          All
        </button>

        {/* Dynamic Tags */}
        {visibleTags.map((tag) => (
          <button
            key={tag}
            className={`btn btn-sm rounded-full ${
              selectedTag === tag ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
        {hiddenTags.length > 0 && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-sm rounded-full ${
                hiddenTags.includes(selectedTag) ? "btn-primary" : "btn-outline"
              }`}
            >
              {hiddenTags.includes(selectedTag)
                ? selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)
                : "More..."}
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[100] mt-2 w-72 max-h-72 overflow-y-auto overflow-x-hidden p-2 shadow-xl border border-base-300"
            >
              {hiddenTags.map((tag) => (
                <li key={tag}>
                  <button
                    onClick={() => setSelectedTag(tag)}
                    className={`w-full rounded-lg px-3 py-2 text-left whitespace-normal break-words transition-colors ${
                      selectedTag === tag
                        ? "bg-primary text-primary-content"
                        : "hover:bg-base-200"
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Blogs blogList={blogs} />
    </div>
  );
}

export default Feed;
