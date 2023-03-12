/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Movies from '../pages/Movies';

describe('Movies', () => {
  test('should render the correct elements', () => {
    render(<Movies />);

    expect(screen.getByPlaceholderText('Enter a year')).toBeInTheDocument();
    expect(screen.getByText('Show:')).toBeInTheDocument();
    expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByTestId('movies-body')).toBeInTheDocument();
    expect(screen.getByTestId('movies-input')).toBeInTheDocument();
  });
});
