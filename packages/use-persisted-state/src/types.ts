import type { Dispatch, SetStateAction } from 'react';

export interface UsePersistedStateArgs<T> {
  state: T;
  key: string;
}

export interface Clear {
  (): Promise<void>;
}

export type IsHydrated = boolean;

export type BaseStore = {
  get(key: string): Promise<any>;
  set(key: string, value: string): Promise<void>;
};

export type StoreWithRemoveItem = BaseStore & {
  removeItem: (key: string) => Promise<void>;
};

export type StoreWithDel = BaseStore & {
  del(key: string): Promise<void>;
};

export type StorageMethod = StoreWithRemoveItem | StoreWithDel;

export interface UsePersistedState {
  <S>(state: S, key: string): Readonly<[S, Dispatch<SetStateAction<S>>, Clear, IsHydrated]>;
  <S>(state: S, key: string, storageMethod?: StorageMethod): Readonly<[S, Dispatch<SetStateAction<S>>, Clear, IsHydrated]>;
}
