import * as React from 'react';
import type * as Types from './types';

const usePersistedStateSync: Types.UsePersistedStateSync = <S extends unknown>(
  stateArg: S,
  key: string
) => {
  const initialState = localStorage.getItem(key) ? JSON.parse(localStorage[key]).value : stateArg;
  const [state, setState] = React.useState<S>(initialState);

  const setAndPersistState = React.useCallback(
    (arg) => {
      const newState = typeof arg === 'function' ? arg(state) : arg;
      localStorage.setItem(key, JSON.stringify({ value: newState }));
      setState(newState);
    },
    [state, setState]
  );

  const clear = React.useCallback(() => {
    localStorage.removeItem(key);
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem(key) == null)
      localStorage.setItem(key, JSON.stringify({ value: state }));
  }, []);

  return [state, setAndPersistState, clear];
};

export default usePersistedStateSync;
