import { Center, Button, Text,useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import {blogPosts} from "./constants/constants";
const Blog = () => {
  return (<>
  <Center id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Blogs
        </Text>
      </Center>
    <Center id="blog" py={4}>
      
      <section className="container">
      {blogPosts.map(
          ({title, description, image, visit,author, tags, time}) => (
      <div className="card-container">
        
           <><div className="card-image">
              <img
                src={image}
                alt={title} />
            </div>
            
            <div className="card-body">
            
              <div>
                  {tags.map((tag, index)=>(           
                    <span className="card-badge card-badge-blue" key={index} >{tag}</span>
                  ))}
              </div>
                <h1>{title}</h1>
                <p className="card-subtitle">
                  {description}
                </p>
                <div className="card-author">
                  <img
                    src={image}
                    alt={author} />
                  <div className="author-info">
                    <p className="author-name">{author}</p>
                    <p className="post-timestamp">{time}</p>
                  </div>
                  <Button
                          flex={1}
                          width={20}
                          fontSize={"sm"}
                          rounded={"full"}
                          bg= {"gray.200"}
                          color={'useColorModeValue("blue.700", "gray.700")'}
                          _hover={{
                            bgGradient: "linear(to-r, #7928CA, #FF0080)",
                          }}
                          onClick={() => {
                            window.open(visit, "_blank");
                          }}
                        >
                        Visit
                    </Button>
                </div>
              </div></>
        
        </div>
        ))}
      </section>
    </Center></>
  );
};

export default Blog;
