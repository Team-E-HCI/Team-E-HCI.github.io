import {
  CONTENT_CATEGORY_FAIL,
  CONTENT_CATEGORY_REQUEST,
  CONTENT_CATEGORY_SUCCESS,
  CONTENT_LIST_FAIL,
  CONTENT_LIST_REQUEST,
  CONTENT_LIST_SUCCESS,
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
      return { loading: false, contents: action.payload }
    case CONTENT_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
