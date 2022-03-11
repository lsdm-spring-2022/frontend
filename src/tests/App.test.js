import { render, screen } from '@testing-library/react';

import App from '../components/App';

test('Renders H2', () => {
  render(<App />);
  const headerElement = screen.getByText('Data from API');
  expect(headerElement).toBeInTheDocument();
});
