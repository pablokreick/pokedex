import "./pokemons.css";
import React from "react";
import { CircleLoader } from "react-spinners";
import Main from "components/layout/Main/Main";
import Pagination from "components/ui/Pagination/Pagination";
import PokemonCard from "components/ui/PokemonCard/PokemonCard";
import { usePokemons } from "hooks/usePokemons";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usePowerContext } from "contexts/PowerContext";

const LIMIT = 8;
const TOTAL_POKEMONS = 1154;

const Pokemons = () => {
	const { pageId } = useParams();
	const { isPower } = usePowerContext();
	const { pokemons, isLoading } = usePokemons(pageId, LIMIT);
	const navigate = useNavigate();

	const goToPreviousPage = () => {
		if (+pageId > 1) {
			navigate(`/pokemons/${+pageId - 1}`);
		}
	};

	const goToNextPage = () => {
		if (+pageId < Math.ceil(TOTAL_POKEMONS / LIMIT)) {
			navigate(`/pokemons/${+pageId + 1}`);
		}
	};

	if (!isPower) {
		return (
			<>
				<Main type="dark">
					<Navigate to="/" />
				</Main>
				<Pagination />
			</>
		);
	}

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
