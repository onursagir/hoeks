import * as React from 'react';
import usePersistedStateSync from '../../src';

const AddToArray: React.FunctionComponent = () => {
  const [array, setArray, clear] = usePersistedStateSync<number[]>([], 'test-component-key');

  return (
    <>
      <button data-testid="add-btn" onClick={() => setArray((arr) => [...arr, arr.length])}>
        button
      </button>
      <p data-testid="count">{array}</p>
      <button data-testid="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default AddToArray;
