import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator_container">
      <div className="calculator-body">
        <div className="display-screen">
          <span>0</span>
        </div>
        <div className="calculator-buttons">
          <div className="row">
            <button type="button" className="btns">
              AC
            </button>
            <button type="button" className="btns">
              +/-
            </button>
            <button type="button" className="btns">
              %
            </button>
            <button type="button" className="btns coloured-btn">
              /
            </button>
          </div>
          <div className="row">
            <button type="button" className="btns">
              7
            </button>
            <button type="button" className="btns">
              8
            </button>
            <button type="button" className="btns">
              9
            </button>
            <button type="button" className="btns coloured-btn">
              X
            </button>
          </div>
          <div className="row">
            <button type="button" className="btns">
              4
            </button>
            <button type="button" className="btns">
              5
            </button>
            <button type="button" className="btns">
              6
            </button>
            <button type="button" className="btns coloured-btn">
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="btns">
              1
            </button>
            <button type="button" className="btns">
              2
            </button>
            <button type="button" className="btns">
              3
            </button>
            <button type="button" className="btns coloured-btn">
              +
            </button>
          </div>
          <div className="row">
            <button type="button" className="btns zero-btn">
              0
            </button>
            <button type="button" className="btns">
              .
            </button>
            <button type="button" className="btns coloured-btn">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
