import React from 'react';
import { render, screen } from '@testing-library/react';
import MainNav from '../mainNav';
import { labels } from '../../../common/constants';

it('renders main nav using constant label', () => {
  render(<MainNav/>);
  expect(screen.getByText(labels.homepageTitle)).toBeInTheDocument();
});
