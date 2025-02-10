import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostContent from '../PostContent';
import { usePostById } from '../../hooks/usePostById';
import React from 'react';

jest.mock('@/hooks/usePostById', () => ({
  usePostById: jest.fn(),
}));

describe('PostContent Component', () => {
  it('renders loading state', () => {
    (usePostById as jest.Mock).mockReturnValue({ post: null, error: null, loading: true });
    render(<PostContent id="1" />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    (usePostById as jest.Mock).mockReturnValue({ post: null, error: 'Failed to load post', loading: false });
    render(<PostContent id="1" />);
    expect(screen.getByText(/failed to load post/i)).toBeInTheDocument();
  });

  it('renders post content', () => {
    (usePostById as jest.Mock).mockReturnValue({
      post: { title: 'Test Post', body: 'Test Body' },
      error: null,
      loading: false,
    });
    render(<PostContent id="1" />);
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });
});
