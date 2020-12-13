import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders hello on home component', () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});