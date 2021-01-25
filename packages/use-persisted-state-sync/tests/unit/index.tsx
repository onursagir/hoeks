import * as React from 'react';
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';
import Counter from '../components/counter';
import { render, fireEvent } from '@testing-library/react';

describe('usePersistedStateSync tests', () => {
  it('Tests calls to localStorage', () => {
    const container = render(<Counter />);
    const button = container.getByText('button');

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'test-component-key',
      JSON.stringify({ value: 1 })
    );

    expect(container.getByText('1')).toBeInTheDocument();

    fireEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'test-component-key',
      JSON.stringify({ value: 2 })
    );
  });
});
