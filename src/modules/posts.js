import { fuchsia } from "color-name";
import * as postsAPI from "../api/posts";

//액션 생성 함수
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POSTS_ERROR";


export const getPosts = () => async (dispatch) => {
  //요청이 시작됨
  dispatch({ type: GET_POSTS });
  //API를 호출
  try {
    const posts = await postsAPI.getPosts();
    //성공했을 때
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    //실패 했을때                    
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  //요청이 시작됨
  dispatch({ type: GET_POST });
  //API를 호출
  try {
    const post = await postsAPI.getPost(id);
    //성공했을 때
    dispatch({
      type: GET_POST_SUCCESS,
      posts,
    });
  } catch (e) {
    //실패 했을때
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};



