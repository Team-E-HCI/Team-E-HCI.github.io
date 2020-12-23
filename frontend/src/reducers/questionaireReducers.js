import {
  QUESTIONAIRE_POST_FAIL,
  QUESTIONAIRE_POST_REQUEST,
  QUESTIONAIRE_POST_SUCCESS,
} from '../constants/questionaireConstant'

export const inputQuestionaireReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONAIRE_POST_REQUEST:
      return { loading: true }
    case QUESTIONAIRE_POST_SUCCESS:
      return { loading: false, success: true }
    case QUESTIONAIRE_POST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
