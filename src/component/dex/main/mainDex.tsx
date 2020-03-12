import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../../types";
import SearchBar from "./searchBar";

interface Props {
	pokemon: Pokemon;
	searchClick: (searchReasult: string) => void;
	addToTeam: (url: string) => void;
	idUp: () => void;
	idDown: () => void;
}

export default class MainDex extends React.Component<Props> {
	onClick = () => {
		console.log(this.props.pokemon);
		
		this.props.addToTeam("https://pokeapi.co/api/v2/pokemon/" + this.props.pokemon.name);
		
	};

	render() {
		return (
			<div style={mainStyle}>
				<button onClick={this.onClick} style={addStyle}>
					+
				</button>

				<MainDisplay
					sprite={this.props.pokemon.sprites}
					name={this.props.pokemon.name}
					weight={this.props.pokemon.weight}
					height={this.props.pokemon.height}>
					<SearchBar
						searchClick={this.props.searchClick}
						placeHolder="Search for a pokemon..."
					/>
				</MainDisplay>

				<div style={idNavpadWrapper}>
					<MainID id={this.props.pokemon.id} />
					<MainNavpad idDown={this.props.idDown} idUp={this.props.idUp} />
				</div>
			</div>
		);
	}
}

const mainStyle: React.CSSProperties = {
	width: "55%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center"
};
const idNavpadWrapper: React.CSSProperties = {
	width: "80%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexWrap: "wrap"
};

const addStyle: React.CSSProperties = {
	position: "absolute",
	right: 0,
	bottom: 0,
	zIndex: 1000,

	height: "2rem",
	width: "2rem",

	padding: ".5rem",
	margin: "1rem",

	textAlign: "center"
};
