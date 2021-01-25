import * as React from 'react';
import usePersistedStateSync from '../../src';

const Counter: React.FunctionComponent = () => {
  const [count, setCount, clear] = usePersistedStateSync(1, 'test-component-key');

  return (
    <>
      <p id="count">{count}</p>
      <button id="add-btn" onClick={() => setCount(count + 1)}>
        button
      </button>
      <button id="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default Counter;
