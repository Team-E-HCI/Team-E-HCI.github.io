import axios from 'axios'
import {
  QUESTIONAIRE_POST_FAIL,
  QUESTIONAIRE_POST_REQUEST,
  QUESTIONAIRE_POST_SUCCESS,
} from '../constants/questionaireConstant'

export const postQuestionaire = (
  pertanyaan1,
  pertanyaan2,
  pertanyaan3,
  pertanyaan4,
  pertanyaan5
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUESTIONAIRE_POST_REQUEST,
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
      `/api/kuesioner`,
      { pertanyaan1, pertanyaan2, pertanyaan3, pertanyaan4, pertanyaan5 },
      config
    )

    dispatch({
      type: QUESTIONAIRE_POST_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: QUESTIONAIRE_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
