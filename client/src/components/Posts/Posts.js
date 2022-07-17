import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
// import useStyles from './styles';
import { CircularProgress, Grid } from '@chakra-ui/react';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // const classes = useStyles();

  return (
    // <>
    !posts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
    // </>

  );
};

export default Posts;
