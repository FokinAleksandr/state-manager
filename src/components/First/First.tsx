import * as React from 'react';
import { useFirst, useSecond } from '../../hooks/globalState';

export default function First() {
  const [firstState, setFirstState] = useFirst();
  const [secondState, setSecondState] = useSecond();

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => setFirstState(firstState + 1)}>
        change first
      </button>
      <h1>{JSON.stringify(firstState)}</h1>
      <button
        onClick={() => {
          if (secondState === null) {
            setSecondState({ b: 1 });
          } else {
            setSecondState({ ...secondState, b: secondState.b + 1 });
          }
        }}
      >
        change second
      </button>
      <h1>{JSON.stringify(secondState)}</h1>
    </div>
  );
}
