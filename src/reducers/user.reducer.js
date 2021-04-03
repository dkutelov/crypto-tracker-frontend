function userReducer(state, { type, payload }) {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default userReducer;
