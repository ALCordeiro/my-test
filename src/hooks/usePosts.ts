'use client'
import { useEffect } from "react";
import { usePostStore } from "@/store/postStore";

export function usePosts() {
  const { posts, loadAllPosts, loading, error } = usePostStore();

  useEffect(() => {
    if (posts.length === 0) {
      loadAllPosts();
    }
  }, [posts, loadAllPosts]);

  return { posts, loading, error };
}
