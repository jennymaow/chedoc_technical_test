/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Series from '../pages/Series';

describe('Series', () => {
  test('should render the correct elements', () => {
    render(<Series />);

    expect(screen.getByPlaceholderText('Enter a year')).toBeInTheDocument();
    expect(screen.getByText('Show:')).toBeInTheDocument();
    expect(screen.getByText('Popular Series')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByTestId('series-body')).toBeInTheDocument();
    expect(screen.getByTestId('series-input')).toBeInTheDocument();
  });
});
