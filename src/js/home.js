import React from "react";

import { Nav } from "./component/nav.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Card } from "./component/card.js";
import { Footer } from "./component/footer.js";

export const Home = () => {
	let generateCards = () => {
		const cards = [];
		const card = (
			<div className="col">
				<Card />
			</div>
		);

		for (let i = 0; i < 4; i++) {
			cards.push(card);
		}
		return cards;
	};

	return (
		<div>
			<Nav />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{/* <Card />
					<Card />
					<Card />
					<Card /> */}
					{generateCards()}
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
