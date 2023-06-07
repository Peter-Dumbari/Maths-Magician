import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operations: null,
  });

  const clickHandle = (e) => {
    const result = e.target.name;
    const realResult = calculate(state, result);
    setState({ ...state, ...realResult });
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator_container">
      <div className="calculator-body">
        <div className="display-screen">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="calculator-buttons">
          <div className="row">
            <button
              name="AC"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              AC
            </button>
            <button
              name="+/-"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              +/-
            </button>
            <button
              name="%"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              %
            </button>
            <button
              name="÷"
              type="button"
              className="btns coloured-btn"
              onClick={clickHandle}
            >
              &divide;
            </button>
          </div>
          <div className="row">
            <button
              name="7"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              7
            </button>
            <button
              name="8"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              8
            </button>
            <button
              name="9"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              9
            </button>
            <button
              name="x"
              type="button"
              className="btns coloured-btn"
              onClick={clickHandle}
            >
              x
            </button>
          </div>
          <div className="row">
            <button
              name="4"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              4
            </button>
            <button
              name="5"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              5
            </button>
            <button
              name="6"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              6
            </button>
            <button
              name="-"
              type="button"
              className="btns coloured-btn"
              onClick={clickHandle}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              name="1"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              1
            </button>
            <button
              name="2"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              2
            </button>
            <button
              name="3"
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              3
            </button>
            <button
              name="+"
              type="button"
              className="btns coloured-btn"
              onClick={clickHandle}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              name="0"
              type="button"
              className="btns zero-btn"
              onClick={clickHandle}
            >
              0
            </button>
            <button
              name="."
              type="button"
              className="btns"
              onClick={clickHandle}
            >
              .
            </button>
            <button
              name="="
              type="button"
              className="btns coloured-btn"
              onClick={clickHandle}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
