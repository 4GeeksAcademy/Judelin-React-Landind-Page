import React from "react";
import Navbar from "./Navbar";


//create your first component
const Home = () => {
	let infoSection = [
		{
			title: "Sofware Developer",
			description: "It is good Job" ,
		},
		{
			title: "Sofware Developer",
			description: "It is good Job" ,
		},
		{
			title: "Sofware Developer",
			description: "It is good Job" ,
		},
	];
	return (
		<Navbar />
	)
};

export default Home;