export const authenticationReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ON_FILL_FIELD':
      return { ...state, [payload.option]: payload.value };

    case 'SET_AUTHORIZED':
      return { ...state, isAuthorized: payload.value };

    default:
      return state;
  }
};
