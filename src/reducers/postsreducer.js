export default (state = [], action) => {
  switch (action.type) {
    case "POST_ACTION":
      return action.payload;
    default:
      return state;
  }
};
