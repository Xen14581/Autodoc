const reducer = (state = { Open: false }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        Open: !state.Open,
      };
    default:
      return state;
  }
};

export default reducer;
