import { render, screen } from '@testing-library/react';

import About from '../routes/About';

test('Renders title', () => {
  render(<About />);
  const headerElement = screen.getByText('About Page');
  expect(headerElement).toBeInTheDocument();
});
