import { render, screen } from '@testing-library/react';

import About from '../pages/About';

test('Renders about content', () => {
  render(<About />);
  const teamHeader = screen.getByText('The Team');
  const projectHeader = screen.getByText('The Project');

  expect(teamHeader).toBeInTheDocument();
  expect(projectHeader).toBeInTheDocument();
});
