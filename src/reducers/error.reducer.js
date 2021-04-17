function errorReducer(errorState, { type, payload }) {
  switch (type) {
    case 'SET_ERROR_MESSAGE':
      return {
        ...errorState,
        message: payload,
      };
    case 'RESET_ERROR_MESSAGE':
      return {
        ...errorState,
        message: '',
      };

    default:
      return errorState;
  }
}

export default errorReducer;
