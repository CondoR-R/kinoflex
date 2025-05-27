import { TFilter } from "@/data/filters.data";
import { create } from "zustand";

export interface IStore {
  currentFilter: TFilter;
  setCurrentFilter: (filter: TFilter) => void;
}

export const useFilterStore = create<IStore>((set) => ({
  currentFilter: "Популярные",
  setCurrentFilter: (filter) => set({ currentFilter: filter }),
}));
