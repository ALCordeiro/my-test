import { create } from "zustand";
import { fetchPosts, fetchPostById } from "@/services/api";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostStore {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
  loadAllPosts: () => Promise<void>;
  loadSinglePost: (id: string) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  currentPost: null,
  loading: false,
  error: null,

  loadAllPosts: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPosts();
      set({ posts: data.slice(0, 10), loading: false });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      set({ error: "Failed to fetch posts", loading: false });
    }
  },

  loadSinglePost: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPostById(id);
      set({ currentPost: data, loading: false });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      set({ error: "Failed to fetch post", loading: false });
    }
  },
}));
