import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <p>{count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <p />
        <input onChange={(e) => setIncrementAmount(e.target.value)} />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          amount
        </button>
      </div>
    </>
  );
}
