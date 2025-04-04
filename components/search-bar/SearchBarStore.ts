import { create } from "zustand";

type SearchedPokemonStore = {
	search: string;
	setSearch: (newSearch: string) => void;
};

export const useSearchedPokemonStore = create<SearchedPokemonStore>((set) => ({
	search: "",
	setSearch: (newSearch) => set({ search: newSearch }),
}));
