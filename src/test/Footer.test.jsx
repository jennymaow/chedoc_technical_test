/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('should render the correct elements', () => {
    render(<Footer />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Collection Statement')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Manage Account')).toBeInTheDocument();
    expect(
      screen.getByText('Copyright © 2016 DEMO Streaming. All rights reserved.'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('facebook-link')).toHaveAttribute(
      'href',
      'https://www.chedoc.com/centros',
    );
    expect(screen.getByTestId('facebook-icon')).toHaveAttribute(
      'src',
      '/social/facebook-white.svg',
    );
    expect(screen.getByTestId('facebook-icon')).toHaveAttribute('alt', 'facebook icon');
  });
});
