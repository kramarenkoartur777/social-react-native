import { LOGIN, LOGOUT, SIGN_UP, BACK_HOME, CHAT, LOGIN_IN, PHOTOS, MUSIC, NAV_BACK_BUTTON, PHOTO_SIZE, SIGN_IN } from './const';

export const sign = () => {
  return {
    type: SIGN_UP,

  }
};

export const signIn = () => {
  return {
    type: SIGN_IN,

  }
};

export const login = () => {
  return {
    type: LOGIN,

  }
};

export const loginIn = () => {
  return {
    type: LOGIN_IN,

  }
};

export const logout = () => {
  return {
    type: LOGOUT
  }
};

export const backHome = () => {
  return {
    type: BACK_HOME
  }
};

export const photos = () => {
  return {
    type: PHOTOS
  }
};

export const music = () => {
  return {
    type: MUSIC
  }
};

export const chat = () => {
  return {
    type: CHAT
  }
};

export const photoSize = () => {
  return {
    type: PHOTO_SIZE
  }
};

export const navBackButton = () => {
  return {
    type: NAV_BACK_BUTTON
  }
};
