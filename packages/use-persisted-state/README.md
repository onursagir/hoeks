# @hoeks/use-persisted-state

The [hoeks](https://github.com/onursagir/hoeks) `usePersistedState` hook. Persist your state variable asynchronously. By default it uses IndexedDB. Made with TypeScript

## Installation

```bash
$ yarn add @hoeks/use-persisted-state
$ npm i --save @hoeks/use-persisted-state
```

## Usage

It's similar to the React.useState hook. The only difference is that you provide a second argument being the key which will be use to save the state in IndexedDB. It also returns an extra function to clear the state from IndexedDB and a 4th state indicating if the state has been hydrated

### Example

```javascript
import * as React from 'react';
import usePersistedState from '@hoeks/use-persisted-state';

const Example: React.FunctionComponent = () => {
  const [count, setCount, clear, isHydrated] = usePersistedState(1, 'example');

  if (isHydrated) return <p>Loading...</p>;

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={clear}>Clear me</button>
    </>
  );
};
```
