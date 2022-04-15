import { render, screen } from '@testing-library/react';

import Home from '../routes/Home';

test('Renders title', () => {
  render(<Home />);
  const headerElement = screen.getByText('Home Page');
  expect(headerElement).toBeInTheDocument();
});
