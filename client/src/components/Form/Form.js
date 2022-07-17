import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

// import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { Button, Container, Input, Textarea } from '@chakra-ui/react';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Container >
      <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <Input  variant="h6">{currentId ? `Editing "${post.title}"` : 'Tell Us what You Know About Space😉'}</Input>
        <Input  style={{backgroundColor:"#fff", opacity:"0.56"}}  name="creator" variant="outlined" label="Creator Name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <Input  style={{backgroundColor:"#fff", opacity:"0.56"}}  name="title" variant="outlined" label="Title(eg. Black Hole)" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <Textarea  style={{backgroundColor:"#fff", opacity:"0.56"}}  name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <Input style={{backgroundColor:"#fff", opacity:"0.56"}}  name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button  variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained"  size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
      <div style={{color: 'white'}}>For Deletion of any sort of content Contact <a href="mailto:yashkapure06@gmail.com" variant="contained">Here</a></div>
    </Container>
  );
};

export default Form;
