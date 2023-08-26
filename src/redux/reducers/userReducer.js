const {
  CHANGE_FULL_NAME,
  CHANGE_AGE,
  IS_DARK_THEME,
} = require('../actions/actionTypes');

const initialState = {
  fullName: '',
  age: 12,
  isDarkTheme: false,
};

const userReducer = (state = initialState, action) => {
  console.log('State', state, 'Action', action);

  switch (action.type) {
    case CHANGE_FULL_NAME:
      return {...state, fullName: action.payload};

    case CHANGE_AGE:
      return {...state, age: action.payload};

    case IS_DARK_THEME:
      return {...state, isDarkTheme: !state.isDarkTheme};
  }

  return state;
};

export default userReducer;
