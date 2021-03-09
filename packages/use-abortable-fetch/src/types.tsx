export interface Abort {
  (): void;
}

export interface UseAbortableFetch {
  (): [typeof fetch, Abort];
}
