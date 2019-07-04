
import React, { Reducer, useReducer } from 'react';

interface IState {
  count: number;
}

interface IAction {
  type: 'increment' | 'decrement';
}

const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const Counter: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p>Current count: <strong>{state.count}</strong></p>

      <button className="btn btn-primary" onClick={() => {
        dispatch({ type: 'increment' });
      }}>
        Increment
        </button>
    </div >
  );
}