import { create } from "zustand";

interface StudioState {
  prompt: string;
  platform: string;
  tone: string;
  setPrompt: (value: string) => void;
  setPlatform: (value: string) => void;
  setTone: (value: string) => void;
}

export const useStudioStore = create<StudioState>((set) => ({
  prompt: "",
  platform: "Instagram",
  tone: "modern",
  setPrompt: (value) => set({ prompt: value }),
  setPlatform: (value) => set({ platform: value }),
  setTone: (value) => set({ tone: value })
}));
