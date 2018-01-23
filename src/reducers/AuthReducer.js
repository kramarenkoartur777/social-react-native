import { LOGIN, LOGOUT, SIGN_UP, BACK_HOME, LOGIN_IN, PHOTOS, CHAT, MUSIC, NAV_BACK_BUTTON, PHOTO_SIZE, SIGN_IN } from '../actions/const';

const INITIAL_STATE = {
  isSign: false,
  isSignIn: false,
  isLogin: false,
  isHome: false,
  isLoginIn: false,
  isPhotos: false,
  isPhotoSize: false,
  isMusic: false,
  isChat: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        isHome: true,
        isSign: true,
      }
    case SIGN_IN:
      return {
        ...state,
        isSignIn: true,
      }
    case LOGIN:
      return {
        ...state,
        isHome: true,
        isLogin: true
      }
    case LOGIN_IN:
      return {
        ...state,
        isLoginIn: true
      }
    case BACK_HOME:
      return {
        ...state,
        isHome: false,
        isLogin: false,
        isSign: false
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        isHome: false,
        isLoginIn: false,
        isSignIn: false
      }
    case PHOTOS:
      return {
        ...state,
        isPhotos: true
      }
    case PHOTO_SIZE:
      return {
        ...state,
        isPhotoSize: true
      }
    case MUSIC:
      return {
        ...state,
        isMusic: true
      }
    case CHAT:
      return {
        ...state,
        isChat: true
      }
    case NAV_BACK_BUTTON:
      return {
        ...state,
        isPhotos: false,
        isMusic: false,
        isChat: false
      }
    default:
      return state;
  }
};

export default AuthReducer;
