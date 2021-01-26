import * as React from 'react';
import * as Types from './types';
import * as idb from 'idb-keyval';

const usePersistedState: Types.UsePersistedState = <S,>(stateArg: S, key: string, storeMethod?: Types.StorageMethod) => {
  const store: Types.StorageMethod = storeMethod || idb;
  const [state, setState] = React.useState<S>(stateArg);
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const bootstrap = async () => {
      let persistedValue;

      try {
        const storedValue = await store.get(key);
        persistedValue = JSON.parse(storedValue).value;
      } catch (e) {}

      if (persistedValue == null) {
        setState(stateArg);

        await idb.set(key, stateArg);
      } else {
        setState(persistedValue);
      }

      setIsHydrated(true);
    };

    bootstrap();
  }, []);

  React.useEffect(() => {
    store.set(key, JSON.stringify({ value: state }));
  }, [state]);

  const clear = React.useCallback(async () => {
    const { del } = store as Types.StoreWithDel;
    const { removeItem } = store as Types.StoreWithRemoveItem;

    await del?.(key);
    await removeItem?.(key);
  }, []);

  return [state, setState, clear, isHydrated] as const;
};

export default usePersistedState;
