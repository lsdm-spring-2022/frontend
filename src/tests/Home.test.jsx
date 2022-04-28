import '@testing-library/jest-dom';
import { render, screen } from './testUtils';

import { Home } from '../pages/Home';

describe('Home page tests', async () => {
  it('should render the home content', () => {
    render(<Home />);
    const mainHeader = screen.getByText('Historical Social Media');
    const subHeader = screen.getByText(
      'Query Historical Social Media Data from Reddit & Twitter'
    );
    const whyHeader = screen.getByText('Why?');
    const dataHeader = screen.getByText('Data?');
    const regionsHeader = screen.getByText('Regions');
    const regionsTable = screen.getByText('Reddit Data Range');

    expect(mainHeader).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();
    expect(whyHeader).toBeInTheDocument();
    expect(dataHeader).toBeInTheDocument();
    expect(regionsHeader).toBeInTheDocument();
    expect(regionsTable).toBeInTheDocument();
  });
});
