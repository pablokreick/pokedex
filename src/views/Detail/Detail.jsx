import React from "react";
import { CircleLoader } from "react-spinners";
import Main from "components/layout/Main/Main";
import Pagination from "components/ui/Pagination/Pagination";
import PokemonDetail from "components/ui/PokemonDetail/PokemonDetail";
import usePokemon from "hooks/usePokemon";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { usePowerContext } from "contexts/PowerContext";
import { useFavoriteContext } from "contexts/FavoriteContext";

const Detail = () => {
	const { pokemonId } = useParams();
	const { loading, pokemon } = usePokemon(pokemonId);
	const navigate = useNavigate();
	const { isPower } = usePowerContext();
	const { handleFavorites, isInFavorites } = useFavoriteContext();

	const handleBack = () => {
		navigate(-1);
	};

	const handleClick = () => {
		handleFavorites(pokemon);
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
				{loading ? (
					<CircleLoader color="#ff0000" loading size={100} />
				) : (
					<PokemonDetail
						pokemon={pokemon}
						handleBack={handleBack}
						handleClick={handleClick}
						isInFavorites={isInFavorites}
					/>
				)}
			</Main>
			<Pagination />
		</>
	);
};

export default Detail;
