import * as React from 'react';
import Counter from '../components/counter';
import { render, fireEvent } from '@testing-library/react';

describe('usePersistedStateSync tests', () => {
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
  const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

  it('should initialize localStorage with default value and setting new values', () => {
    const { getByTestId } = render(<Counter />);
    const addButton = getByTestId('add-btn');

    expect(setItemSpy).toHaveBeenCalledTimes(1);
    expect(setItemSpy).toHaveBeenCalledWith('test-component-key', JSON.stringify({ value: 1 }));

    expect(getByTestId('count')).toHaveTextContent('1');

    fireEvent.click(addButton);

    expect(setItemSpy).toHaveBeenCalledTimes(2);
    expect(setItemSpy).toHaveBeenCalledWith('test-component-key', JSON.stringify({ value: 2 }));
  });

  it('should clear localstorage when pressing clear', () => {
    const { getByTestId } = render(<Counter />);
    const clearButton = getByTestId('clear-btn');

    expect(getByTestId('count')).toHaveTextContent('2');

    fireEvent.click(clearButton);

    expect(removeItemSpy).toHaveBeenCalledTimes(1);
    expect(removeItemSpy).toHaveBeenLastCalledWith('test-component-key');
  });
});
