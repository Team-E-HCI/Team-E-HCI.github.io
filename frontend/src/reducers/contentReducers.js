import {
  CONTENT_CATEGORY_FAIL,
  CONTENT_CATEGORY_REQUEST,
  CONTENT_CATEGORY_SUCCESS,
  CONTENT_DELETE_FAIL,
  CONTENT_DELETE_REQUEST,
  CONTENT_DELETE_SUCCESS,
  CONTENT_DETAIL_FAIL,
  CONTENT_DETAIL_REQUEST,
  CONTENT_DETAIL_SUCCESS,
  CONTENT_LIST_FAIL,
  CONTENT_LIST_REQUEST,
  CONTENT_LIST_SUCCESS,
  CONTENT_POST_FAIL,
  CONTENT_POST_REQUEST,
  CONTENT_POST_SUCCESS,
} from '../constants/contentConstants'

export const contentListReducer = (state = { contents: [] }, action) => {
  switch (action.type) {
    case CONTENT_LIST_REQUEST:
      return { loading: true, contents: [] }
    case CONTENT_LIST_SUCCESS:
      return { loading: false, contents: action.payload }
    case CONTENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contentCategoryReducer = (state = { contents: [] }, action) => {
  switch (action.type) {
    case CONTENT_CATEGORY_REQUEST:
      return { loading: true, contents: [] }
    case CONTENT_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case CONTENT_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contentDetailReducer = (state = { content: {} }, action) => {
  switch (action.type) {
    case CONTENT_DETAIL_REQUEST:
      return { loading: true, content: {} }
    case CONTENT_DETAIL_SUCCESS:
      return { loading: false, content: action.payload }
    case CONTENT_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contentCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_DETAIL_REQUEST:
      return { loading: true }
    case CONTENT_DETAIL_SUCCESS:
      return { loading: false, success: true }
    case CONTENT_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contentPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_POST_REQUEST:
      return { loading: true }
    case CONTENT_POST_SUCCESS:
      return { loading: false, success: true }
    case CONTENT_POST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTENT_DELETE_REQUEST:
      return { loading: true }
    case CONTENT_DELETE_SUCCESS:
      return { loading: false, success: true, message: action.payload }
    case CONTENT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
