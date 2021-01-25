import * as React from 'react';
import Counter from '../components/counter';
import AddToArray from '../components/add-to-array';

export default {
  '/use-persisted-state-sync/counter': () => <Counter />,
  '/use-persisted-state-sync/add-to-array': () => <AddToArray />,
};
