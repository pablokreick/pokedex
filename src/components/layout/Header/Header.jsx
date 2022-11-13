import React from "react";
import logo from "assets/img/logo.png";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<img className="logo" src={logo} alt="logo de Pokemon" />
		</header>
	);
};

export default Header;
