import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "components/layout/NavBar/NavBar";
import Container from "components/layout/Container/Container";
import Header from "components/layout/Header/Header";
import Pokemons from "views/Pokemons/Pokemons";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Header />
				<Routes>
					<Route path="/" element={<Pokemons />} />
					<Route path="/*" element={<Pokemons />} />
				</Routes>
				<NavBar />
			</Container>
		</BrowserRouter>
	);
}

export default App;
