import Blog from "../model/blog.js"

export const createBlog = async (req,res)=>{
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
};

export const getBlogs = async (req,res)=>{
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

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
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog deleted successfully",
      deletedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};