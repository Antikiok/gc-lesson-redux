import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../counter.actions';

const Counter = ({ counter, incr, decr, res }) => (
  <div className="counter">
    <button className="counter__button" onClick={() => decr()}>
      -
    </button>
    <span className="counter__value" onClick={() => res()}>
      {counter}
    </span>
    <button className="counter__button" onClick={() => incr()}>
      +
    </button>
  </div>
);

const mapState = state => ({
  counter: state,
});

const mapDispatch = dispatch => ({
  incr: () => dispatch(increment()),
  decr: () => dispatch(decrement()),
  res: () => dispatch(reset()),
});

const connector = connect(mapState, mapDispatch);

export default connector(Counter);
