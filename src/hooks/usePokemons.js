import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";

export const usePokemons = (page) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getPokemons({ page, limit: 8 })
			.then((response) => setPokemons(response))
			.finally(() => setIsLoading(false));
	}, [page]);

	return { pokemons, isLoading };
};
