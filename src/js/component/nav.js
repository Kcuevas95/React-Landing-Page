import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<a className="navbar-brand text-white bg-dark" href="#">
					Start Bootstrap
				</a>

				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link text-white bg-dark" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white bg-dark" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white bg-dark" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white bg-dark" href="#">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
