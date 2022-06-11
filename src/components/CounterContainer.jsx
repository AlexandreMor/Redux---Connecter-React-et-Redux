import React from "react";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p id="counter-render">{counter}</p>

    <button
      id="button-increment"
      onClick={() => dispatch({ type: "INCREMENT" })}
    >
      Increment
    </button>

    <button
      id="button-increment-ten"
      onClick={() => dispatch({ type: "INCREMENT BY TEN" })}
    >
      Increment by ten
    </button>

    <button
      id="button-decrement"
      onClick={() => dispatch({ type: "DECREMENT" })}
    >
      Decrement
    </button>

    <button
      id="button-decrement-ten"
      onClick={() => dispatch({ type: "DECREMENT BY TEN" })}
    >
      Decrement by ten
    </button>

    <button id="reset" onClick={() => dispatch({ type: "RESET" })}>
      Reset
    </button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
