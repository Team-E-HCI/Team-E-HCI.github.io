import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userNotificationsReducer,
} from './reducers/userReducers'
import {
  contentListReducer,
  contentCategoryReducer,
  contentDetailReducer,
  contentCommentReducer,
  contentDeleteReducer,
} from './reducers/contentReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userNotifications: userNotificationsReducer,
  contentList: contentListReducer,
  contentCategory: contentCategoryReducer,
  contentDetail: contentDetailReducer,
  contentComment: contentCommentReducer,
  contentDelete: contentDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
