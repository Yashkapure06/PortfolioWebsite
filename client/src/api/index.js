import axios from 'axios';

const url = 'https://mernportfolioyash.herokuapp.com/posts';

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
