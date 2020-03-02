import * as React from "react";
import axios from "axios";

import { Pokemon } from "./types";
import { ErrorBoundary } from "./errorBoundry";

// import { resolve } from "dns";
// import { BrowserRouter } from "react-router-dom";
// import Layout from "./component/layout";

interface Props {}
interface State {
	ID: number;
	currentPokemon: Pokemon;
}
export default class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			ID: 1,
			currentPokemon: {}
		};
	}

	async componentDidMount() {
		const pokemon = await this.fetchPokeData(this.state.ID);
		this.setState({
			currentPokemon: {
				name: pokemon.name,
				weight: pokemon.weight,
				sprites: pokemon.sprites.front_default
			}
		});
	}

	upState = async () => {
		if (this.state.ID < 807) {
			const newId = this.state.ID + 1;
			const pokemon = await this.fetchPokeData(newId);

			this.setState({
				ID: pokemon.id,
				currentPokemon: {
					name: pokemon.name,
					weight: pokemon.weight,
					sprites: pokemon.sprites.front_default
				}
			});
		}
	};
	downState = async () => {
		if (this.state.ID > 1) {
			const newId = this.state.ID - 1;
			const pokemon = await this.fetchPokeData(newId);

			this.setState({
				ID: pokemon.id,
				currentPokemon: {
					name: pokemon.name,
					weight: pokemon.weight,
					sprites: pokemon.sprites.front_default
				}
			});
		}
	};

	// triggerAfterAWhile(): Promise<boolean> {
	//   return new Promise((resolve) => {
	//     setTimeout(() => resolve(true), 3000)
	//   })
	// }

	fetchPokeData = async (id: number) => {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
		return res.data;
	};

	render() {
		console.log(this.state.currentPokemon);
		return (
			<div>
				<button onClick={this.downState}>Down</button>
				<button onClick={this.upState}>up</button>

				<ErrorBoundary>
					<h1 style={{ textTransform: "capitalize" }}>
						{this.state.currentPokemon.name}
					</h1>
					<h2>{this.state.currentPokemon.weight} lb</h2>
					<img src={this.state.currentPokemon.sprites} alt="sprite" />
				</ErrorBoundary>
			</div>
		);
	}
}
