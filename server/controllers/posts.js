import express from 'express';
import mongoose from 'mongoose';

import BlogPost from '../models/blogPost.js';

const router = express.Router();


export const getPosts = async (req, res) => {
    try {
        const blogPost =  await BlogPost.find();
        res.status(200).jsom(blogPost);
    }catch(e) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try{
        const post = await BlogPost.findById(id);
        res.status(200).json(post);
    }catch(e) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {title, description, selectedFile, author, aboutAuthor, tags, twitterHandle, instagramHandle, linkedinHandle, facebookHandle, website, metaKeywords, metaDescription} = req.body;

    const newBlogPost = new BlogPost({title, description, selectedFile, author, aboutAuthor, tags, twitterHandle, instagramHandle, linkedinHandle, facebookHandle, website, metaKeywords, metaDescription})

    try{
        await newBlogPost.save();
        res.status(201).json(newBlogPost);
    }catch(e) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const {id} = req.params;
    const {title, description, selectedFile, author, aboutAuthor, tags, twitterHandle, instagramHandle, linkedinHandle, facebookHandle, website, metaKeywords, metaDescription} = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Blog Post with id : ${id}`);

    const updatedPost = {title, description, selectedFile, author, aboutAuthor, tags, twitterHandle, instagramHandle, linkedinHandle, facebookHandle, website, metaKeywords, metaDescription,_id: id};

    await BlogPost.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);
}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await BlogPost.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await BlogPost.findById(id);

    const updatePost = await BlogPost.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatePost);
}

export default router;