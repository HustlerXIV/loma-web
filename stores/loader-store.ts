import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  message?: string;
  show: (message?: string) => void;
  hide: () => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: false,
  message: "Loading...",
  show: (message) => set({ isLoading: true, message }),
  hide: () => set({ isLoading: false, message: "" }),
}));
