import React from "react";
import { Navigate } from "react-router-dom";
import Main from "components/layout/Main/Main";
import Pagination from "components/ui/Pagination/Pagination";
import { usePowerContext } from "contexts/PowerContext";

const Power = () => {
	const { isPower } = usePowerContext();

	if (isPower) {
		return <Navigate to="/pokemons" />;
	}

	return (
		<>
			<Main type="dark"></Main>
			<Pagination />
		</>
	);
};

export default Power;
