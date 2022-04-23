import { render, screen } from '@testing-library/react';

import About from '../pages/About';

test('Renders team', () => {
  render(<About />);
  const teamHeader = screen.getByText('The Team');
  expect(teamHeader).toBeInTheDocument();
});

test('Renders project', () => {
  render(<About />);
  const projectHeader = screen.getByText('The Project');
  expect(projectHeader).toBeInTheDocument();
});
