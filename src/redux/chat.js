const reducer = (state = { chats: [], selected: null }, action) => {
  switch (action.type) {
    case "GETCHATS":
      return {
        ...state,
        chats: action.data,
      };
    case "SELECTEDCHAT":
      return {
        ...state,
        selected: action.data
      }
    case "ALLMESSAGE":
      return {
        ...state,
        selected: {
          ...state.selected,
          messages: action.data
        }
      }
    default:
      return state
  }
};

export default reducer;
