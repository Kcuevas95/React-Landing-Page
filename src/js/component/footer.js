import React from "react";

export const Footer = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-dark"
			style={{
				position: "fixed",
				bottom: "0",
				width: "100%",
				height: "auto"
			}}>
			<h1
				className="text-white bg-dark"
				style={{ fontSize: "12px", margin: "auto" }}>
				Copyright @ Your Website 2021
			</h1>
		</nav>
	);
};
