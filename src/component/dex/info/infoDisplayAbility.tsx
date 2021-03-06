import React, { Suspense } from "react";
import { Pokemon } from "../../../types";
import { normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy } from "../../css"
import PokeLoad from "../PokeLoad";
import GenerateBio from './GenerateBio'

const GenerateAbilities = React.lazy(() =>
import('./ListGenerator'))

interface Props {
	pokemon: Pokemon
	isDesktop: boolean;
}
export default class InfoDisplay extends React.Component<Props> {
	typeColor = (type: string) => {
		switch (type) {
			case "normal":
				return <p key={type} style={{ ...typeTextStyle, ...normal }}>{type}</p>;
			case "fire":
				return <p key={type} style={{ ...typeTextStyle, ...fire }}>{type}</p>;
			case "water":
				return <p key={type} style={{ ...typeTextStyle, ...water }}>{type}</p>;
			case "electric":
				return <p key={type} style={{ ...typeTextStyle, ...electric }}>{type}</p>;
			case "grass":
				return <p key={type} style={{ ...typeTextStyle, ...grass }}>{type}</p>;
			case "ice":
				return <p key={type} style={{ ...typeTextStyle, ...ice }}>{type}</p>;
			case "fighting":
				return <p key={type} style={{ ...typeTextStyle, ...fighting }}>{type}</p>;
			case "poison":
				return <p key={type} style={{ ...typeTextStyle, ...poison }}>{type}</p>;
			case "ground":
				return <p key={type} style={{ ...typeTextStyle, ...ground }}>{type}</p>;
			case "flying":
				return <p key={type} style={{ ...typeTextStyle, ...flying }}>{type}</p>;
			case "psychic":
				return <p key={type} style={{ ...typeTextStyle, ...psychic }}>{type}</p>;
			case "bug":
				return <p key={type} style={{ ...typeTextStyle, ...bug }}>{type}</p>;
			case "rock":
				return <p key={type} style={{ ...typeTextStyle, ...rock }}>{type}</p>;
			case "ghost":
				return <p key={type} style={{ ...typeTextStyle, ...ghost }}>{type}</p>;
			case "dragon":
				return <p key={type} style={{ ...typeTextStyle, ...dragon }}>{type}</p>;
			case "dark":
				return <p key={type} style={{ ...typeTextStyle, ...dark }}>{type}</p>;
			case "steel":
				return <p key={type} style={{ ...typeTextStyle, ...steel }}>{type}</p>;
			case "fairy":
				return <p key={type} style={{ ...typeTextStyle, ...fairy }}>{type}</p>;
		}
	};

	render() {
		const types: string[] = [];
		this.props.pokemon.types?.forEach(type => {
			types.push(type.type.name);
		});
		return (
			<div style={this.props.isDesktop ? displayStyle : displayStyleMobile}>
				<Suspense fallback={ <PokeLoad />}>
				<div style={this.props.isDesktop ? bioWrapperStyle : bioWrapperStyleMobile}>
					<h4>Bio</h4>
					<GenerateBio pokeName={this.props.pokemon.name} />
				</div>
 
				<div style={abilityWrapperStyle}>
					<h4>Abilities</h4>
					<GenerateAbilities 
					textStyle={flavorTextStyle}
					nameStyle={flavorNameStyle} 
					listItems={this.props.pokemon.abilities} 
					/>
				</div>
				<div style={typeStyle}>{types.map(type => this.typeColor(type))}</div>
				</Suspense>
			</div>
		);
	}
}

const flavorNameStyle: React.CSSProperties = {
    margin:".2rem 0",
    padding:".2rem 1rem",

    background:"#333",
    borderLeft:".2rem solid #e7e7e7",

    fontSize: "1.1rem",
    cursor:"pointer"
};
const flavorTextStyle: React.CSSProperties = {
    padding: ".5rem 1rem",
    margin:"0 0 .5rem 1rem",

    background:"#333",

	fontSize: ".8rem"
};

const displayStyle: React.CSSProperties = {
	position: 'absolute',
	top: "6rem",
	bottom: "6rem",
	width: '90%',

	maxWidth: "35rem",

	padding: "1rem",

	background: "#272727",
	color: "#e7e7e7",
	borderRadius: "1rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	boxShadow: "-.2rem .2rem .2rem #123",
};

const displayStyleMobile: React.CSSProperties= {
	position: 'absolute',
	top: "2rem",
	bottom: "7rem",
	width: '90%',

	maxWidth: "35rem",

	padding: "1rem",

	background: "#272727",
	color: "#e7e7e7",
	borderRadius: "1rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	boxShadow: "-.2rem .2rem .2rem #123",
	
}

const bioWrapperStyle: React.CSSProperties = {
	height: "40%",
	
	padding: ".8rem",
	
	background: "#333",
	border: ".3rem double #272727"

};

const bioWrapperStyleMobile: React.CSSProperties = {
	height: "50%",
	
	padding: ".8rem",
	
	background: "#333",
	border: ".3rem double #272727"
}

const abilityWrapperStyle: React.CSSProperties = {
	height: "50%",

	padding: ".8rem",

	background: "#333",
	border: ".3rem double #272727",
	overflowY: "auto"
};

// -- -- -- -- -- types

const typeStyle: React.CSSProperties = {
	width: "100%",
	maxWidth: "",

	padding: "1rem",

	textTransform: "uppercase",
	fontSize: "bold",

	display: "flex",
	justifyContent: "space-evenly"
};
const typeTextStyle: React.CSSProperties = {
	padding: "0.5rem 1rem",
	color: "#eee",

	letterSpacing: ".1rem",
	fontWeight: "bolder",

	borderRadius: "1rem"
};
