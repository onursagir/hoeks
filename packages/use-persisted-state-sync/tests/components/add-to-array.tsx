import * as React from 'react';
import usePersistedStateSync from '../../src';

const AddToArray: React.FunctionComponent = () => {
  const [array, setArray, clear] = usePersistedStateSync<number[]>([], 'test-component-key');

  const addToArray = React.useCallback(() => {
    setArray([...array, array.length]);
  }, [array, setArray]);

  return (
    <>
      <p id="count">{array}</p>
      <button id="add-btn" onClick={addToArray}>
        button
      </button>
      <button id="clear-btn" onClick={clear}>
        clear
      </button>
    </>
  );
};

export default AddToArray;
