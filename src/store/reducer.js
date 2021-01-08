const initialState = {
  exampleArray: [],
  someData: []
};

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY":
      return {
        ...state,
        exampleArray: action.payload
      };
    case "SET_DATA":
      return {
        ...state,
        someData: action.payload
      };
    default:
      return state;
  }
};

export default ExampleReducer;
