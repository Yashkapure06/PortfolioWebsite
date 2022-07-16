import { Center } from "@chakra-ui/react";
import React from "react";
import "./styles.css";

const Blog = () => {
  return (
    <Center id="projects" py={4}>
      <section className="container">
        <div className="card-container">
          <div className="card-image">
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="a brand new sports car"
            />
          </div>
          <div className="card-body">
            <span className="card-badge card-badge-blue">Car design</span>
            <h1>Why is the sports cars so well designed?</h1>
            <p className="card-subtitle">
              An exploration into the car design industry and how it works
            </p>
            <div className="card-author">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="author avatar"
              />
              <div className="author-info">
                <p className="author-name">John Doe</p>
                <p className="post-timestamp">2h ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Center>
  );
};

export default Blog;
