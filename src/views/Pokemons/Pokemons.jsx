import React, { useState } from "react";
import { CircleLoader } from "react-spinners";
import Main from "components/layout/Main/Main";
import Pagination from "components/ui/Pagination/Pagination";
import PokemonCard from "components/ui/PokemonCard/PokemonCard";
import { usePokemons } from "hooks/usePokemons";
import "./pokemons.css";

const Pokemons = () => {
	const [page, setPage] = useState(1);
	const { pokemons, isLoading } = usePokemons(page);

	const goToPreviousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const goToNextPage = () => {
		setPage(page + 1);
	};
	return (
		<>
			<Main>
				{isLoading && <CircleLoader color="#ff0000" loading size={100} />}
				{!isLoading && (
					<div className="grid">
						{pokemons.map((pokemon) => (
							<PokemonCard key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
				)}
			</Main>
			<Pagination previousPage={goToPreviousPage} nextPage={goToNextPage} />
		</>
	);
};

export default Pokemons;
