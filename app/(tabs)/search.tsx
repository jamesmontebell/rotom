import Main from "@/components/main/Main";
import { Text } from "@/components/main/Text";
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { fetchPokemonCardByName } from "@/utils/PokemonCardUtils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

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

	const pokemonCard = {
		image: "https://images.pokemontcg.io/xy1/1.png",
		title: "Pikachu - VMAX",
		cardSet: ["Sword & Shield", "Vivid Voltage"],
		rarity: "Ultra Rare",
		qty: 3,
		price: 89.99,
	};

	return (
		<Main>
			<SearchBar />
			<FlatList
				style={searchListStyles.container}
				numColumns={2}
				data={[
					pokemonCard,
					pokemonCard,
					pokemonCard,
					pokemonCard,
					pokemonCard,
					pokemonCard,
					pokemonCard,
					pokemonCard,
				]}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				renderItem={({ item }) => (
					<SearchedPokemonCard {...item} />
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
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
