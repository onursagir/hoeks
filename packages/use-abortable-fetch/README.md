# @hoeks/use-abortable-fetch

The [hoeks](https://github.com/onursagir/hoeks) `useAbortableFetch` hook. Make a fetch call and abort. Made with TypeScript

## Installation

```bash
$ yarn add @hoeks/use-abortable-fetch
$ npm i --save @hoeks/use-abortable-fetch
```

## Usage

It returns 2 functions. First one is the [regular fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function, it only appends a signal parameter. The second function is used to abort the fetch call. After aborting the AbortController gets resets allowing you to reuse the fetch function

### Example

```javascript
import * as React from 'react';
import useAbortableFetch from '@hoeks/use-abortable-fetch';

const Example: React.FunctionComponent = () => {
  const [abortAbleFetch, abort] = useAbortableFetch();

  const makeRequest = React.useCallback(() => {
    abortAbleFetch('https://example.com/');
  }, [abortAbleFetch]);

  return (
    <>
      <button onClick={makeRequest}>Make request</button>
      <button onClick={abort}>Abort request</button>
    </>
  );
};
```
