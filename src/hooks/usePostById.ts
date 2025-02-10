'use client'
import { useEffect } from "react";
import { usePostStore } from "@/store/postStore";

export function usePostById(id: string) {
  const { currentPost, loadSinglePost, loading, error } = usePostStore();

  useEffect(() => {
    if (!currentPost || currentPost.id.toString() !== id) {
      loadSinglePost(id);
    }
  }, [id, currentPost, loadSinglePost]);

  return { post: currentPost, loading, error };
}
