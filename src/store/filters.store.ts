import { TFilter } from "@/types/filters.types";
import { create } from "zustand";

export interface IStore {
  currentFilter: TFilter;
  setCurrentFilter: (filter: TFilter) => void;
}

// state manager для фильтра на Home
export const useFilterStore = create<IStore>((set) => ({
  currentFilter: "Популярные",
  setCurrentFilter: (filter) => set({ currentFilter: filter }),
}));
