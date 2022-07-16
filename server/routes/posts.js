import  express from "express";

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
// patch is used for updating existing document
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;