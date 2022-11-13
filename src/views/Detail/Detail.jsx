import React from "react";
import { CircleLoader } from "react-spinners";
import Main from "components/layout/Main/Main";
import Pagination from "components/ui/Pagination/Pagination";
import PokemonDetail from "components/ui/PokemonDetail/PokemonDetail";
import usePokemon from "hooks/usePokemon";
import { useParams, useNavigate, Navigate } from "react-router-dom";

const Detail = () => {
	const { pokemonId } = useParams();
	const { loading, pokemon } = usePokemon(pokemonId);
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Main>
				{loading ? (
					<CircleLoader color="#ff0000" loading size={100} />
				) : (
					<PokemonDetail pokemon={pokemon} handleBack={handleBack} />
				)}
			</Main>
			<Pagination />
		</>
	);
};

export default Detail;
