import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';

test('Renders heading', () => {
  render(<Home />);
  const mainHeaderElement = screen.getByText('Historical Social Media');
  const subHeaderElement = screen.getByText('Query Historical Social Media Data from Reddit & Twitter');
  expect(mainHeaderElement).toBeInTheDocument();
  expect(subHeaderElement).toBeInTheDocument();
});
