import { COUNTER_SUBTRAIR, COUNTER_SOMAR } from "./actionTypes";
const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_SOMAR:
      return state + action.number;
    case COUNTER_SUBTRAIR:
      return state - action.number;
    default:
      return state;
  }
};

export default reducerCounter;
