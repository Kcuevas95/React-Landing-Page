import React from "react";

export const Footer = () => {
	let footerStyle = {
		position: "fixed",
		bottom: "0",
		width: "100%",
		height: "auto"
	};

	let text = {
		fontSize: "12px",
		margin: "auto"
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-dark"
			style={footerStyle}>
			<h1 className="text-white bg-dark" style={text}>
				Copyright @ Your Website 2021
			</h1>
		</nav>
	);
};
