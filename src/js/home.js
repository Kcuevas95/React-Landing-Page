import React from "react";

import { Nav } from "./component/nav.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Card } from "./component/card.js";
import { Footer } from "./component/footer.js";

export const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
