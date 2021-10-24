const reducer = (state = { apps: [], reports: [], diagnosis: "" }, action) => {
  switch (action.type) {
    case "ALL_APPOINTMENTS":
      return {
        apps: action.data,
      };
    case "NEW_APPOINTMENT":
      return {
        ...state,
        apps: [...state.apps, action.data],
      };
    case "ADMIN_REPORTS":
      return {
        ...state,
        reports: action.data,
      };
    case "DIAGNOSIS":
      return {
        ...state,
        diagnosis: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
