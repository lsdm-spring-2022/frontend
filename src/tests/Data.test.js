import { render, screen } from '@testing-library/react';

import Data from '../routes/Data';

test('Renders title', () => {
  render(<Data />);
  const headerElement = screen.getByText('Submit Data Request');
  expect(headerElement).toBeInTheDocument();
});
