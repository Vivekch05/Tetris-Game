import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = screen.getByTestId('tetris-game');
  expect(linkElement).toBeInTheDocument();
});
