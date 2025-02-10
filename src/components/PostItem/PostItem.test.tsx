import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostItem from '../PostItem';
import React from 'react';

const mockPost = {
  title: 'Test Post',
  body: 'This is a test post body content.',
  id: 1,
};

describe('PostItem Component', () => {
  it('renders the title correctly', () => {
    render(<PostItem {...mockPost} />);
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
  });

  it('renders the body correctly', () => {
    render(<PostItem {...mockPost} />);
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });

  it('renders the Read more link with correct href', () => {
    render(<PostItem {...mockPost} />);
    const link = screen.getByText(/read more/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/post/${mockPost.id}`);
  });
});
