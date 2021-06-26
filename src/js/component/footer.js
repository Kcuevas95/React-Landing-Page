import React from "react";

export const Footer = () => {
	let footerStyle = {
		position: "fixed",
		bottom: "0",
		width: "100%",
		height: "auto"
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-dark"
			style={footerStyle}>
			<h1
				className="text-white bg-dark"
				style={{ fontSize: "12px", margin: "auto" }}>
				Copyright @ Your Website 2021
			</h1>
		</nav>
	);
};
