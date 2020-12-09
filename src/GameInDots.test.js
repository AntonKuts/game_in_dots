import React from 'react';
import { render, screen } from '@testing-library/react';
import GameInDots from './GameInDots';

test('renders learn react link', () => {
  render(<GameInDots />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
