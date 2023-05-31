import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

/**
 * * Use reducer typings
 */

const INCREMENT = "Increment";
const DECREMENT = "Decrement";
const RESET = "Reset";

type InitalStateType = {
  count: number;
};

// ================= Discriminated unions =================
type UpdateAction = {
  type: "Increment" | "Decrement" | "Reset";
  payload: number;
};

type ResetAction = {
  type: "Reset";
};

type ActionType = UpdateAction | ResetAction;

// =======================================================

const initalState = {
  count: 0,
};

const countReducer = (state: InitalStateType, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - action.payload,
      };
    case RESET:
      return initalState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = React.useReducer(countReducer, initalState);
  return (
    <div>
      <h1>Count is {state.count}</h1>
      <br />
      <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>
        +
      </button>
      <br />
      <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}>
        -
      </button>
      <br />
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
};

CounterReducer.propTypes = propTypes;
CounterReducer.defaultProps = defaultProps;
// #endregion

export default CounterReducer;
