import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProjectsFormComponent from './UserProjectsFormComponent';

test('renders learn react link', () => {
  render(<UserProjectsFormComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
