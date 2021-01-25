import type { Dispatch, SetStateAction } from 'react';

export interface UsePersistedStateSyncArgs<T> {
  state: T;
  key: string;
}

export interface Clear {
  (): void;
}

export interface UsePersistedStateSync {
  <S>(state: S, key: string): [S, Dispatch<SetStateAction<S>>, Clear];
}
