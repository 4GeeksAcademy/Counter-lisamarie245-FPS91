import React from "react";
import { Counter } from "../Counter";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<h1 className="text-center mt-5 fst-italic text-primay font-monospace fw-bold alert alert-primary" role="alert">Simple Counter
			</h1>
			<Counter/>
		</div>

	);
};

export default Home;
