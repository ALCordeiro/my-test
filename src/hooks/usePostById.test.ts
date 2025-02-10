import { renderHook } from '@testing-library/react';
import { usePostById } from '../hooks/usePostById';
import { usePostStore } from '../store/postStore';

jest.mock('../store/postStore');

describe('usePostById Hook', () => {
  it('should load post when id changes', () => {
    const mockLoadSinglePost = jest.fn();
    
    (usePostStore as unknown as jest.Mock).mockReturnValue({
      currentPost: null,
      loadSinglePost: mockLoadSinglePost,
      loading: false,
      error: null,
    });
    
    renderHook(() => usePostById('1'));
    
    expect(mockLoadSinglePost).toHaveBeenCalledWith('1');
  });

  it('should not reload post if currentPost matches id', () => {
    const mockLoadSinglePost = jest.fn();
    
    (usePostStore as unknown as jest.Mock).mockReturnValue({
      currentPost: { id: '1', title: 'Test Post', body: 'Test Body' },
      loadSinglePost: mockLoadSinglePost,
      loading: false,
      error: null,
    });
    
    renderHook(() => usePostById('1'));
    
    expect(mockLoadSinglePost).not.toHaveBeenCalled();
  });

  it('should return correct state values', () => {
    (usePostStore as unknown as jest.Mock).mockReturnValue({
      currentPost: { id: '1', title: 'Test Post', body: 'Test Body' },
      loadSinglePost: jest.fn(),
      loading: false,
      error: null,
    });
    
    const { result } = renderHook(() => usePostById('1'));
    
    expect(result.current.post).toEqual({ id: '1', title: 'Test Post', body: 'Test Body' });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
