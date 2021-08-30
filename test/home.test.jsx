import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '../src/pages';

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Home Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
