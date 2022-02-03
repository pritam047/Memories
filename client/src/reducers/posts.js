// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; // to be modified
        case 'CREATE':
            return [...posts, action.payload]; // to be modified
        case 'UPDATE':
            return posts.map((post)=> post.id === action.payload._id ? action.payload : post);    
        default:
            return posts;    
    }
};