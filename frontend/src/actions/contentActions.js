import axios from 'axios'
import {
  CONTENT_LIST_FAIL,
  CONTENT_LIST_REQUEST,
  CONTENT_LIST_SUCCESS,
  CONTENT_CATEGORY_FAIL,
  CONTENT_CATEGORY_REQUEST,
  CONTENT_CATEGORY_SUCCESS,
} from '../constants/contentConstants'

export const listContent = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTENT_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/konten/', config)

    dispatch({
      type: CONTENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CONTENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listContentCategorized = (category) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: CONTENT_CATEGORY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/konten/kategori/${category}`, config)

    dispatch({
      type: CONTENT_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CONTENT_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
