import '@testing-library/jest-dom';
import { render, screen } from './testUtils';

import { About } from '../pages/About';

describe('About page tests', async () => {
  it('should render the about content', () => {
    render(<About />);
    const teamHeader = screen.getByText('The Team');
    const projectHeader = screen.getByText('The Project');

    expect(teamHeader).toBeInTheDocument();
    expect(projectHeader).toBeInTheDocument();
  });
});
