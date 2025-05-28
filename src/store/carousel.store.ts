import { TFilter } from "@/types/filters.types";
import { create } from "zustand";

export interface ICaroucel {
  activeCardIndex: number;
  setActiveCardIndex: (index: number) => void;
}

export const useCarouselStore = create<ICaroucel>((set) => ({
  activeCardIndex: 4,
  setActiveCardIndex: (index) => set({ activeCardIndex: index }),
}));
