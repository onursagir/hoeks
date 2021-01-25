# @hoeks/use-persisted-state-sync

The [hoeks](https://github.com/onursagir/hoeks) `usePersistedStateSync` hook. Persist your state variable into the browsers localStorage(sync). Made with TypeScript

## Installation

```bash
$ yarn add @hoeks/use-persisted-state-sync
$ npm i --save @hoeks/use-persisted-state-sync
```

## Usage

It's similar to the React.useState hook. The only difference is that you provide a second argument being the key which will be use to save the state in localStorage. It also returns a 3rd function which allows you to clear the localStorage

### Example

```javascript
import * as React from 'react';
import usePersistedStateSync from '@hoeks/use-persisted-state-sync';

const Example: React.FunctionComponent = () => {
  const [count, setCount, clear] = usePersistedStateSync(1, 'example');

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={clear}>Clear me</button>
    </>
  );
};
```
