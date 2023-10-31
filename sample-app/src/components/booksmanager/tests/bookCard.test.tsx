import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCard from '../common/bookCard';
import Book from '../../../model/bookManagement/book';

const books : Array<Book> = [{name: 'Test Book',type: 'test type' }, {name: 'Test Book 2',type: 'test type 2' }];  

it('renders book card with correct details', () => {
  render(<BookCard title='Test BookCard' books={[]} />);
  expect(screen.getByText('Test BookCard')).toBeInTheDocument();
});


it('renders book card with correct list of books', () => {
    render(<BookCard title='Test BookCard' books={ books } />);
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Book 2')).toBeInTheDocument();
  });