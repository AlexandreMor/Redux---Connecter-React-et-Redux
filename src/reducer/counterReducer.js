export const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "INCREMENT BY TEN":
        return state + 10;
      case "DECREMENT BY TEN":
        return state - 10;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };