import React from "react";

export const Card = () => {
	return (
		// <div className="col-md-3 col-12">
		<div className="body">
			<div className="card" style={{ minWidth: "12rem" }}>
				<img
					className="card-img-top"
					src=".../100px180/"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
