import * as React from 'react';
import type * as Types from './types';

const usePersistedStateSync: Types.UsePersistedStateSync = <S,>(stateArg: S, key: string) => {
  const initialState = localStorage.getItem(key) ? JSON.parse(localStorage[key]).value : stateArg;

  const [state, setState] = React.useState(initialState);

  const setAndPersistState = React.useCallback(
    (state) => {
      localStorage.setItem(key, JSON.stringify({ value: state }));
      setState(state);
    },
    [state, setState]
  );

  const clear = React.useCallback(() => {
    localStorage.removeItem(key);
  }, []);

  React.useEffect(() => {
    if (localStorage[key] == null) localStorage.setItem(key, JSON.stringify({ value: state }));
  }, []);

  return [state, setAndPersistState, clear];
};

export default usePersistedStateSync;
