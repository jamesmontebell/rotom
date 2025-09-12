import * as SQLite from "expo-sqlite";

import { PokemonCardCollection } from "@/models/pokemonCardCollection";

let db: SQLite.SQLiteDatabase | null = null;

export const getDb = async (): Promise<SQLite.SQLiteDatabase> => {
	if (!db) {
		db = await SQLite.openDatabaseAsync("pokemon.db");
	}
	return db;
};

export const initDb = async () => {
	const db = await getDb();

	// collections table
	await db.execAsync(`CREATE TABLE IF NOT EXISTS collections (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		emoji TEXT
	);`);

	// 🔥 clear all rows in collections on every init
	await db.execAsync(`DELETE FROM collections;`);

	// singleton watchlist table
	await db.execAsync(`CREATE TABLE IF NOT EXISTS watchlist (
		id INTEGER PRIMARY KEY CHECK (id = 1),
		name TEXT NOT NULL,
		emoji TEXT 
	);`);

	// cards table
	await db.execAsync(`CREATE TABLE IF NOT EXISTS cards (
		id INTEGER PRIMARY KEY,
		collection_id INTEGER,
		image TEXT,
		is_watchlisted INTEGER DEFAULT 0,
		FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE
	);`);

	// ensure singleton watchlist row exists
	await db.runAsync(
		`INSERT OR IGNORE INTO watchlist (id, name, emoji) VALUES (1, ?, ?);`,
		"Watchlist",
		"👀"
	);
};

// Insert a new collection
export const insertCollection = async (
	name: string,
	emoji: string,
	callback?: () => void
) => {
	const db = await getDb();
	try {
		console.log("Attempting to insert collection", name, emoji);
		await db.runAsync(
			"INSERT INTO collections (name, emoji) VALUES (?, ?);",
			name,
			emoji
		);
		console.log("Insert succeeded");
		callback?.();
	} catch (error) {
		console.error("SQLite Insert Error:", error);
		throw error;
	}
};

export const getWatchlist = async () => {
	const db = await getDb();
	try {
		const result = await db.getAllAsync("SELECT * FROM watchlist;");
		console.log("watchlist:", result);
		return result as PokemonCardCollection[];
	} catch (error) {
		console.error("SQLite Select Error:", error);
		return [];
	}
};

export const getCollections = async (): Promise<PokemonCardCollection[]> => {
	const db = await getDb();
	try {
		const result = await db.getAllAsync("SELECT * FROM collections;");
		console.log("Collections:", result);
		return result as PokemonCardCollection[];
	} catch (error) {
		console.error("SQLite Select Error:", error);
		return [];
	}
};

// Insert a card for a collection
// export const insertCard = (
// 	id: number,
// 	collectionId: number,
// 	image: string,
// 	callback?: () => void
// ) => {
// 	db.transaction((tx) => {
// 		tx.executeSql(
// 			"INSERT OR REPLACE INTO cards (id, collection_id, image) VALUES (?, ?, ?);",
// 			[id, collectionId, image],
// 			undefined,
// 			(_, result) => {
// 				callback && callback();
// 			}
// 		);
// 	});
// };

// // Get all collections with their cards
// export const getCollectionsWithCards = (
// 	callback: (collections: any[]) => void
// ) => {
// 	db.transaction((tx) => {
// 		// First get collections
// 		tx.executeSql("SELECT * FROM collections;", [], (_, { rows }) => {
// 			const collections = rows._array;
// 			if (collections.length === 0) {
// 				callback([]);
// 				return;
// 			}

// 			// For each collection, fetch cards
// 			let completed = 0;
// 			const results = collections.map((c) => ({ ...c, cards: [] }));

// 			collections.forEach((collection, index) => {
// 				tx.executeSql(
// 					"SELECT id, image FROM cards WHERE collection_id = ?;",
// 					[collection.id],
// 					(_, { rows }) => {
// 						results[index].cards = rows._array;
// 						completed++;
// 						if (completed === collections.length) {
// 							callback(results);
// 						}
// 					}
// 				);
// 			});
// 		});
// 	});
// };
