import { useState } from "react";

import { router } from "expo-router";

import { insertCollection } from "@/services/db";

export function newCollectionViewModel() {
	const [collectionState, setCollectionState] = useState({
		title: "New Collection",
		icon: "🙂",
	});

	const insertNewCollection = async () => {
		try {
			await insertCollection(collectionState.title, collectionState.icon);
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
