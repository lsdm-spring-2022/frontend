import '@testing-library/jest-dom';
import { render, screen } from './testUtils';

import { Data } from '../pages/Data';

describe('Data page tests', async () => {
  it('should render the data content', () => {
    render(<Data />);
    const formTitle = screen.getByText('Data Request Form');

    expect(formTitle).toBeInTheDocument();
  });
});
