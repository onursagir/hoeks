import * as React from 'react';
import usePersistedStateSync from '../../src';

const AddToArray: React.FunctionComponent = () => {
  const [array, setArray, clear] = usePersistedStateSync<number[]>([], 'test-component-key');

  return (
    <>
      <button id="add-btn" onClick={() => setArray(arr => [...arr, arr.length])}>
        button
      </button>
      <p id="count">{array}</p>
      <button id="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default AddToArray;
