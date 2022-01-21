// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; // to be modified
        case 'CREATE':
            return [...posts, action.payload]; // to be modified
        default:
            return posts;    
    }
};