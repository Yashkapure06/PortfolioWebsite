import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:String,
    description:String,
    metaDescription:String,
    metaKeywords:String,
    author:String,
    aboutAuthor:String,
    twitterHandle:String,
    facebookHandle:String,
    linkedinHandle:String,
    githubHandle:String,
    instagramHandle:String,
    website:String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


const blogPost = mongoose.model("blogPost", blogSchema);

export default blogPost;