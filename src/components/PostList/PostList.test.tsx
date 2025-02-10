import { render, screen } from "@testing-library/react";
import PostList from "./index";
import { usePosts } from "../../hooks/usePosts";
import React from "react";

jest.mock("@/hooks/usePosts", () => ({
  usePosts: jest.fn(),
}));

describe("PostList Component", () => {
  test("renders posts correctly", () => {
    (usePosts as jest.Mock).mockReturnValue({
      posts: [
        { id: 1, title: "Test Post 1", body: "This is a test post" },
        { id: 2, title: "Test Post 2", body: "Another test post" },
      ],
    });

    render(<PostList />);

    expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a test post/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Post 2/i)).toBeInTheDocument();
  });
});
