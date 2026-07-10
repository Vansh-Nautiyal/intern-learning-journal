import Blog from "../model/blog.js";

const normalizeTags = (tags = []) => [
  ...new Set(tags.map((tag) => tag.trim().toLowerCase()).filter(Boolean)),
];

export const createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const normalizedTags = normalizeTags(tags);
    const blog = await Blog.create({
      title,
      content,
      tags : normalizedTags,
      author: req.user._id,
    });
    res.status(201).json(blog);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const { tag, search } = req.query;

    const filter = {};

    // Filter by tag
    if (tag && tag !== "all") {
      filter.tags = tag;
    }

    // Search by title
    if (search && search.trim() !== "") {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const blogs = await Blog.find(filter)
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id })
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "username email"
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not authorized to delete this blog",
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      message: "Blog deleted successfully",
      deletedBlog: blog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not authorized to update this blog",
      });
    }

    blog.title = req.body.title ?? blog.title;
    blog.content = req.body.content ?? blog.content;
    blog.tags = Array.isArray(req.body.tags)
      ? normalizeTags(req.body.tags)
      : blog.tags;

    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};
