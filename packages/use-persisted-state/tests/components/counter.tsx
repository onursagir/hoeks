import * as React from 'react';
import usePersistedState from '../../src';

const Counter: React.FunctionComponent = () => {
  const [count, setCount, clear, isHydrated] = usePersistedState(0, '@userPersistedState/counter');

  if (!isHydrated) return <p>Loading...</p>;

  return (
    <>
      <p id="count">{count}</p>
      <button id="add-btn" onClick={() => setCount((c) => c + 1)}>
        button
      </button>
      <button id="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default Counter;
