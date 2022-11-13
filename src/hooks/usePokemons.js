import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";

export const usePokemons = (page, limit) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getPokemons({ page, limit })
			.then((response) => setPokemons(response))
			.finally(() => setIsLoading(false));
	}, [page, limit]);

	return { pokemons, isLoading };
};
