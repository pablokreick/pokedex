import React from "react";
import { HeartFill, Power } from "react-bootstrap-icons";
import Pokemons from "assets/img/pokemons.png";
import Button from "components/ui/Button/Button";
import "./navBar.css";

const NavBar = () => {
	return (
		<nav className="nav">
			<div className="nav__power">
				<Button shape="circle">
					<Power color="#ffffff" size={32} />
				</Button>
				<Button shape="circle" contain="image">
					<img src={Pokemons} alt="Pokemons" />
				</Button>
			</div>
			<Button shape="circle">
				<HeartFill color="#ffffff" size={32} />
			</Button>
		</nav>
	);
};

export default NavBar;
