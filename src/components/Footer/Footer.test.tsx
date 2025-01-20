import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';

test('should render footer', () => {
  render(<Footer />);
  expect(screen.getByText('kirill pavlovskii')).toBeInTheDocument();
  expect(screen.getByText('Статьи')).toBeInTheDocument();
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Карьера')).toBeInTheDocument();
  expect(screen.getByText('Java')).toBeInTheDocument();
  expect(screen.getByText('CSS')).toBeInTheDocument();
});
