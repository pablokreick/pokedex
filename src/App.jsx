import NavBar from "components/layout/NavBar/NavBar";
import Pagination from "components/ui/Pagination/Pagination";
import "./App.css";
import Container from "components/layout/Container/Container";
import Header from "components/layout/Header/Header";
import Main from "components/layout/Main/Main";

function App() {
	return (
		<Container>
			<Header />
			<Main></Main>
			<Pagination />
			<NavBar />
		</Container>
	);
}

export default App;
