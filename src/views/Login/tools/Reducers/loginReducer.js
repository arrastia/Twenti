export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ON_CHANGE_INPUT':
      return { ...state, [payload.input]: payload.value };

    default:
      return state;
  }
};
