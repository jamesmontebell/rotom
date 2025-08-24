import { create } from "zustand";

type searchBarState = {
	search: string;
	setSearch: (newSearch: string) => void;
};

export const useSearchBarStore = create<searchBarState>((set) => ({
	search: "",
	setSearch: (newSearch) => set({ search: newSearch }),
}));
