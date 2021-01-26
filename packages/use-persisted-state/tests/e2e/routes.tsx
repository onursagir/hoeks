import * as React from 'react';
import Counter from '../components/counter';
import ArrayOfObjects from '../components/array-of-objects';

export default {
  '/use-persisted-state/counter': () => <Counter />,
  '/use-persisted-state/array-of-objects': () => <ArrayOfObjects />,
};
