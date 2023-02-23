import { render, screen } from '@testing-library/react';
import Featured from './Featured';

test('renders learn react link', () => {
  render(<Featured />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
