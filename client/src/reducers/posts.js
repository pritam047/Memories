import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; // to be modified
        case CREATE:
            return [...posts, action.payload]; // to be modified
        case UPDATE:
        case LIKE:    
            return posts.map((post)=> post.id === action.payload._id ? action.payload : post);    
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;    
    }
};