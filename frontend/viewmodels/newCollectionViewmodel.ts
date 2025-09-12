import { useState } from "react";

import { router } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

import { insertCollection } from "@/services/db";

export function newCollectionViewModel() {
	const queryClient = useQueryClient();
	const [collectionState, setCollectionState] = useState({
		title: "New Collection",
		icon: "🙂",
	});

	const insertNewCollection = async () => {
		try {
			await insertCollection(
				collectionState.title,
				collectionState.icon
			);
			// Invalidate the collections query to trigger a refresh
			await queryClient.invalidateQueries({
				queryKey: ["collections"],
			});
			router.back();
		} catch (error) {
			alert("Failed to create collection. Please try again.");
		}
	};

	return {
		collectionState,
		setCollectionState,
		insertNewCollection,
	};
}
