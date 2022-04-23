import { render, screen } from '@testing-library/react';

import Data from '../pages/Data';

test('Renders data content', () => {
  render(<Data />);
  const formTitle = screen.getByText('Data Request Form');

  expect(formTitle).toBeInTheDocument();
});
