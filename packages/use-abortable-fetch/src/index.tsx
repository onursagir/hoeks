import * as React from 'react';
import type * as Types from './types';

const useAbortableFetch: Types.UseAbortableFetch = () => {
  const abortController = React.useRef(new AbortController());

  const abort = React.useCallback(() => {
    abortController.current.abort();
    abortController.current = new AbortController();
  }, [abortController]);

  const fetchFn = React.useCallback<typeof fetch>(
    (input, init?) => {
      const initWithSignal: RequestInit = {
        ...init,
        signal: abortController.current.signal,
      };

      return fetch(input, initWithSignal);
    },
    [abortController]
  );

  return [fetchFn, abort];
};

export default useAbortableFetch;
