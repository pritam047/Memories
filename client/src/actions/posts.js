import * as api from '../api/index';

import { FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchPosts(page);
  
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try{
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  }
  catch(error){
    console.log(error);
  }
}  

  export const createPost = (post, navigate) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      navigate(`/posts/?page=1`)
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      console.log("updated data:", data);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async(dispatch) => {
    try{
      await api.deletePost(id);

      dispatch({type: DELETE, payload: id});
    }
    catch(error){
      console.log(error);
    }
  }

  export const likePost = (id) => async(dispatch) =>{
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  