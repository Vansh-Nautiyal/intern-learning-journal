import express from "express";

import {getBlogs, getBlogById, createBlog, deleteBlog} from "../controller/controller.js";

const router = express.Router();

router.get('/',getBlogs);
router.post('/',createBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);

export default router;