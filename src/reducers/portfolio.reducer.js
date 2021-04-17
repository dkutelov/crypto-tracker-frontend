function portfolioReducer(portfolioState, { type, payload }) {
  switch (type) {
    case 'SET_PORTFOLIO':
      return {
        ...portfolioState,
        portfolioId: payload._id,
        transactions: payload.transactions,
        createdAt: payload.createdAt,
      };
    case 'ADD_TRANSACTION':
      return {
        ...portfolioState,
        transactions: [...portfolioState.transactions, payload.transaction],
      };
    case 'EDIT_TRANSACTION':
      return {
        ...portfolioState,
        transactions: portfolioState.transactions.map((x) => {
          if (x._id === payload.transaction._id) {
            return payload.transaction;
          }
          return x;
        }),
      };
    case 'DELETE_TRANSACTION':
      return {
        ...portfolioState,
        transactions: portfolioState.transactions.filter(
          (x) => x._id !== payload.id
        ),
      };
    default:
      return portfolioState;
  }
}

export default portfolioReducer;
