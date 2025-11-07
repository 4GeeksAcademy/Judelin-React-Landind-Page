import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	let infoJumbotron = [
		{
			title: "A Warm Welcome!",
			description: "Skip the grocery trip and get dinner recipes delivered right to your doorstep, so you can cook when it fits your schedule. Plus, pause or cancel any time!",
		},
	];

	let cardInfo = [
		{
			imageUrl: "https://unsplash.com/es/fotos/manojo-de-verduras-D6Tu_L3chLE",
			title: "Fresh Product",
			description: "Looking for an affordable, hearty dinner that can feed your loved ones (maybe twice!)? This cost-conscious and savory recipe is for you!",
			buttonLabel: "Shop Recipe"
		},
		{
			imageUrl: "https://unsplash.com/es/fotos/manojo-de-verduras-D6Tu_L3chLE",
			title: "Fresh Product",
			description: "Looking for an affordable, hearty dinner that can feed your loved ones (maybe twice!)? This cost-conscious and savory recipe is for you!",
			buttonLabel: "Shop Recipe"
		},
		{
			imageUrl: "https://unsplash.com/es/fotos/manojo-de-verduras-D6Tu_L3chLE",
			title: "Fresh Product",
			description: "Looking for an affordable, hearty dinner that can feed your loved ones (maybe twice!)? This cost-conscious and savory recipe is for you!",
			buttonLabel: "Shop Recipe"
		},
		{
			imageUrl: "https://unsplash.com/es/fotos/foto-de-puesto-de-verduras-pRJhn4MbsMM",
			title: "Fresh Product",
			description: "Looking for an affordable, hearty dinner that can feed your loved ones (maybe twice!)? This cost-conscious and savory recipe is for you!",
			buttonLabel: "Shop Recipe"

		},
	]
	return (
		<div>
			<Navbar />
			<div className="jumbotron">
				{
					infoJumbotron.map((item, index) => {
						return (
							<Jumbotron key={index} title={item.title} description={item.description} />
						)
					})
				}
			</div>
			<div className="card-section">
				{
					cardInfo.map((value, index) => {
						return (
							<Card key={index} imageUrl={value.imageUrl} title={value.title}
								description={value.description} buttonLabel={value.buttonLabel}
							/>
						)
					})
				}
			</div>
			<div className="footer">
				<Footer description="© 2025 JudeCin, Inc.  All rights reserved."/>
			</div>
		</div>

	)
};

export default Home;