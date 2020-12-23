import axios from 'axios'
import {
  CONTENT_LIST_FAIL,
  CONTENT_LIST_REQUEST,
  CONTENT_LIST_SUCCESS,
  CONTENT_CATEGORY_FAIL,
  CONTENT_CATEGORY_REQUEST,
  CONTENT_CATEGORY_SUCCESS,
  CONTENT_DETAIL_REQUEST,
  CONTENT_DETAIL_SUCCESS,
  CONTENT_DETAIL_FAIL,
  CONTENT_COMMENT_REQUEST,
  CONTENT_COMMENT_SUCCESS,
  CONTENT_COMMENT_FAIL,
  CONTENT_POST_REQUEST,
  CONTENT_POST_SUCCESS,
  CONTENT_POST_FAIL,
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
    })

    dispatch({
      type: CONTENT_LIST_SUCCESS,
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

export const detailContent = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTENT_DETAIL_REQUEST,
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

    const { data } = await axios.get(`/api/konten/${id}`, config)

    dispatch({
      type: CONTENT_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CONTENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const addComment = (id, komen) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTENT_COMMENT_REQUEST,
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

    const { data } = await axios.post(
      `/api/konten/${id}/komentar`,
      { komen },
      config
    )

    dispatch({
      type: CONTENT_COMMENT_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: CONTENT_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const postContent = (judul, postingan, kategori, gambar) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: CONTENT_POST_REQUEST,
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

    await axios.post(
      `/api/konten/create`,
      { judul, postingan, kategori, gambar },
      config
    )

    dispatch({
      type: CONTENT_POST_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: CONTENT_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
