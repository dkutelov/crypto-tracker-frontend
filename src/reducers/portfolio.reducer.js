function portfolioReducer(portfolioState, { type, payload }) {
  console.log('from reducer', type, payload);
  switch (type) {
    case 'SET_PORTFOLIO':
      return {
        ...portfolioState,
        portfolioId: payload._id,
        transactions: payload.transactions,
        createdAt: payload.createdAt,
      };
    default:
      return portfolioState;
  }
}

export default portfolioReducer;
