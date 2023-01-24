import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders learn react link', () => {
  render(<Header />);
  const HeaderContent = screen.getByText(/DRP Test/i);
  expect(HeaderContent).toBeInTheDocument();
});
