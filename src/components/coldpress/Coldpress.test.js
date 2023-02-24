import { render, screen } from '@testing-library/react';
import ColdPress from './Coldpress';

test('renders learn react link', () => {
  render(<ColdPress />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
