const reducer = (state = { speciality: [] }, action) => {
  switch (action.type) {
    case "GET_SPEC":
      return {
        ...state,
        speciality: [...action.data],
      };
    case "NEW_SPEC":
      return {
        ...state,
        speciality: [...state.speciality, action.data],
      };
    case "DELETE_SPEC":
      const updatedSpec = state.speciality.filter((obj) => {
        return obj._id !== action.data;
      });
      return {
        ...state,
        speciality: updatedSpec,
      };
    default:
      return state;
  }
};

export default reducer;
