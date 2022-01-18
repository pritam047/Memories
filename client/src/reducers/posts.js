export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts; // to be modified
        case 'CREATE':
            return posts; // to be modified
        default:
            return posts;    
    }
};