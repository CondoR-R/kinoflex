import { create } from "zustand";

export interface ICaroucel {
  activeCardIndex: number;
  rotateAngle: number;
  radius: number;
  isHide: boolean;
  setActiveCardIndex: (index: number) => void;
  setRotateAngle: (angle: number) => void;
  setRadius: (newRadius: number) => void;
  setIsHide: (hide: boolean) => void;
}
// state manager для карусели на Home
export const useCarouselStore = create<ICaroucel>((set) => ({
  activeCardIndex: 0,
  rotateAngle: 36 * 9,
  radius: 350,
  isHide: false,
  setActiveCardIndex: (index) => set({ activeCardIndex: index }),
  setRotateAngle: (angle) => set({ rotateAngle: angle }),
  setRadius: (newRadius) => set({ radius: newRadius }),
  setIsHide: (hide) => set({ isHide: hide }),
}));
