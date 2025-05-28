import { TFilter } from "@/types/filters.types";
import { create } from "zustand";

export interface ICaroucel {
  activeCardIndex: number;
  rotateAngle: number;
  setActiveCardIndex: (index: number) => void;
  setRotateAngle: (angle: number) => void;
}
// state manager для карусели на Home
export const useCarouselStore = create<ICaroucel>((set) => ({
  activeCardIndex: 0,
  rotateAngle: 36 * 9,
  setActiveCardIndex: (index) => set({ activeCardIndex: index }),
  setRotateAngle: (angle) => set({ rotateAngle: angle }),
}));
