import React from "react"
import { useRef, useCallback } from "react";

const ActionsMap = {
    minus: (a, b) => a - b,
    plus: (a, b) => a + b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
    remain: (a, b) => a % b
};


export const Calculator = (props) => {
    const a = useRef(0);
    const b = useRef(0);

    const runAction = useCallback((e, f) => {
        const action = e.target.name;
        if (ActionsMap[action]) {
            const aValue = parseInt(a.current.value);
            const bValue = parseInt(b.current.value);
            const response = ActionsMap[action](aValue, bValue);
            alert(`The robot's answer is:  ${response}`);
        }
    }, [a, b]);

    const resetAction = () => {
        a.current.value = null;
        b.current.value = null;
    }

    return <>
        <div>
          <input type="number" ref={a} placeholder="0" />
          <input type="number" ref={b} placeholder="0" />

        </div>
        <div>
          <button name="plus" onClick={runAction}>+</button>
          <button name="minus" onClick={runAction}>-</button></div> <div>
          <button name="multiply" onClick={runAction}>*</button>
          <button name="divide" onClick={runAction}>/</button></div> <div>
          <button onClick={resetAction}>CE</button>
          <button name="remain" onClick={runAction}>%</button>

        </div>
    </>;
} 
