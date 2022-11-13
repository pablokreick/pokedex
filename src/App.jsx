import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "components/layout/NavBar/NavBar";
import Container from "components/layout/Container/Container";
import Header from "components/layout/Header/Header";
import Pokemons from "views/Pokemons/Pokemons";
import Detail from "views/Detail/Detail";
import Power from "views/Power/Power";
import Favorites from "views/Favorites/Favorites";
import PowerProvider from "contexts/PowerContext";
import FavoriteProvider from "contexts/FavoriteContext";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<PowerProvider>
				<FavoriteProvider>
					<Container>
						<Header />
						<Routes>
							<Route path="/" element={<Power />} />
							<Route path="/pokemons" element={<Pokemons />} />
							<Route path="/pokemon/:pokemonId" element={<Detail />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/*" element={<Pokemons />} />
						</Routes>
						<NavBar />
					</Container>
				</FavoriteProvider>
			</PowerProvider>
		</BrowserRouter>
	);
}

export default App;
