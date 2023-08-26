import {CHANGE_AGE, CHANGE_FULL_NAME, IS_DARK_THEME} from './actionTypes';

export const changeAge = payload => {
  return {type: CHANGE_AGE, payload: payload};
};

export const changeFullName = payload => {
  return {type: CHANGE_FULL_NAME, payload: payload};
};

export const isDarkThemeAction = () => {
  console.log('IS_DARK_THEME', IS_DARK_THEME);

  return {type: IS_DARK_THEME};
};
