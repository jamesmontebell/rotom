import Main from "@/components/main/Main";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";
import { fetchPokemonCardByName } from "@/utils/PokemonCardUtils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Search() {
	const { search } = useSearchedPokemonStore();
	const [isSearching, setIsSearching] = useState(false);

	const { data, isLoading, refetch, error } = useQuery({
		queryKey: ["pokemonCard", search],
		queryFn: () => fetchPokemonCardByName(search),
		enabled: false,
	});

	useEffect(() => {
		if (search != "") {
			refetch();
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [search, refetch]);

	return (
		<Main>
			<SearchBar />
			{/* {isLoading ? (
				<Loading />
			) : !isSearching ? (
				<text
					style={{
						paddingTop: "calc(e nv(safe-area-inset-top) + 5rem)",
					}}
				>
					search screen content
				</text>
			) : (
				<list
					scroll-orientation="vertical"
					className="listSearchPage"
					list-type="flow"
					span-count={2}
					bounces={true}
					style={{
						listMainAxisGap: "10px",
						// @ts-ignores
						listCrossAxisGap: "10px",
					}}
				>
					{data?.map((item, index) => (
						<list-item
							item-key={`list-item-${index}`}
							key={`list-item-${index}`}
						>
							<SearchedPokemonCard
								image={
									item
										.images
										.large
								}
								title={
									item.name
								}
								cardSet={[
									item.set
										.name,
									item.number +
										"/" +
										item
											.set
											.total,
								]}
								rarity={
									item.rarity
								}
								qty={0}
								price={Math.max(
									item
										?.tcgplayer
										?.prices
										?.normal
										?.market ||
										0,
									item
										?.tcgplayer
										?.prices
										?.reverseHolofoil
										?.market ||
										0,
									item
										?.tcgplayer
										?.prices
										?.holofoil
										?.market ||
										0
								)}
							/>
						</list-item>
					))}
				</list>
			)} */}
		</Main>
	);
}
