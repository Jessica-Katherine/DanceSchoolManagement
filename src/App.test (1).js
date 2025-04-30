import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders navbar brand name', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brandElement = screen.getByText(/Natyam Academy/i);
  expect(brandElement).toBeInTheDocument();
});
