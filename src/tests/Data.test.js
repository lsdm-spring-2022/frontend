import { render, screen } from '@testing-library/react';

import Data from '../pages/Data';

test('Renders title', () => {
  render(<Data />);
  const formTitle = screen.getByText('Data Request Form');
  expect(formTitle).toBeInTheDocument();
});
