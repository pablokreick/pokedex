import { useEffect, useState } from "react";
import { getPokemonById } from "services/getPokemonById";

const usePokemon = (pokemonId) => {
	const [pokemon, setPokemon] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getPokemonById(pokemonId)
			.then((res) => setPokemon(res))
			.finally(() => setIsLoading(false));
	}, [pokemonId]);

	return { isLoading, pokemon };
};

export default usePokemon;
