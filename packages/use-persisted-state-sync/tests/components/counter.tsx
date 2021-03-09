import * as React from 'react';
import usePersistedStateSync from '../../src';

const Counter: React.FunctionComponent = () => {
  const [count, setCount, clear] = usePersistedStateSync(1, 'test-component-key');

  return (
    <>
      <p data-testid="count">{count}</p>
      <button data-testid="add-btn" onClick={() => setCount((c) => c + 1)}>
        button
      </button>
      <button data-testid="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default Counter;
