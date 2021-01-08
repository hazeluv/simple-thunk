const setArray = someNewArray => {
  return {
    type: "SET_ARRAY",
    payload: someNewArray
  };
};

const getSomeData = () => {
  // if you return a function here, it allows for side-effects
  return async (dispatch, getState) => {
    console.log("currentState: ", getState());
    const newData = await fetch("https://api.github.com/users");
    const newToJson = await newData.json();
    console.log();
    dispatch({
      type: "SET_DATA",
      payload: newToJson
    });
  };
};

export { setArray, getSomeData };
