export const initialState = {
  user: null,
  auth: true,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        user: action.user,
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
