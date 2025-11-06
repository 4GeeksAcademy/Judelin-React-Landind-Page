import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";


//create your first component
const Home = () => {
	let infoJumbotron = [
		{
			title: "A Warm Welcome!",
			description: "Skip the grocery trip and get dinner recipes delivered right to your doorstep, so you can cook when it fits your schedule. Plus, pause or cancel any time!",
		},
	];
	return (
		<div>
			<Navbar />
			<div>
				{
					infoJumbotron.map((item, index) => {
						return (
							<Jumbotron key={index} title={item.title} description={item.description}/>
						)
					})
				}
			</div>




		</div>

	)
};

export default Home;