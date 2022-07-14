import  express from "express";

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/blog', getPosts);
router.post('/blog/new', createPost);
router.get('/blog/:id', getPost);

router.patch('/blog/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/blog/:id/likePost', likePost);

export default router;