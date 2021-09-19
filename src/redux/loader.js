const reducer = (state = { load: false }, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        load: !state.load,
      };
    default:
      return state;
  }
};

export default reducer;