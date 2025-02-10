import { renderHook } from "@testing-library/react";
import { usePosts } from "../hooks/usePosts";
import { usePostStore } from "../store/postStore";

jest.mock("../store/postStore");

describe("usePosts", () => {
  it("should call loadAllPosts when posts array is empty", () => {
    const mockLoadAllPosts = jest.fn();

    usePostStore.mockReturnValue({
      posts: [],
      loadAllPosts: mockLoadAllPosts,
      loading: false,
      error: null,
    });

    renderHook(() => usePosts());

    expect(mockLoadAllPosts).toHaveBeenCalledTimes(1);
  });

  it("should not call loadAllPosts when posts array is not empty", () => {
    const mockLoadAllPosts = jest.fn();

    usePostStore.mockReturnValue({
      posts: [{ id: 1, title: "Post 1" }],
      loadAllPosts: mockLoadAllPosts,
      loading: false,
      error: null,
    });

    renderHook(() => usePosts());

    expect(mockLoadAllPosts).not.toHaveBeenCalled();
  });

  it("should return posts, loading, and error state from the store", () => {
    const mockState = {
      posts: [{ id: 1, title: "Post 1" }],
      loadAllPosts: jest.fn(),
      loading: true,
      error: "Failed to fetch posts",
    };

    usePostStore.mockReturnValue(mockState);

    const { result } = renderHook(() => usePosts());

    expect(result.current).toEqual({
      posts: mockState.posts,
      loading: mockState.loading,
      error: mockState.error,
    });
  });
});