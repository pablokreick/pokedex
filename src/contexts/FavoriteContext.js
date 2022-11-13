import React, { useContext } from "react";
import useLocalStorage from "hooks/useLocalStorage";

export const FavoriteContext = React.createContext([]);
const { Provider } = FavoriteContext;

export const useFavoriteContext = () => useContext(FavoriteContext);

const FavoriteProvider = ({ children }) => {
	const [favorites, setFavorites] = useLocalStorage("favorites", []);

	const handleFavorites = (newPokemon) => {
		if (isInFavorites(newPokemon.id)) {
			setFavorites(favorites.filter((pokemon) => pokemon.id !== newPokemon.id));
		} else {
			const { id, name, image } = newPokemon;
			setFavorites([...favorites, { id, name, image }]);
		}
	};

	const isInFavorites = (id) => favorites.some((pokemon) => pokemon.id === id);

	const removeFavorites = () => setFavorites([]);

	return (
		<Provider
			value={{ handleFavorites, isInFavorites, removeFavorites, favorites }}
		>
			{children}
		</Provider>
	);
};

export default FavoriteProvider;
