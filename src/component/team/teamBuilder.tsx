import * as React from "react";
import Axios from "axios";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import DexIcon from "../../assets/pokedex-Icon.png";
import TrashCan from "../../assets/trashcan.png";
import Pokéball from "../../assets/pokeball.png";
import { TeamPokemons } from "../../types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	teamURLs: TeamPokemons;
	isDesktop: boolean;
	clearAll: () => void;
}
interface State {
	teamURLs: TeamPokemons;
	myTeam: any[];
	teamTypes: any[];
	emptyTeam: any[];
}

class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			emptyTeam: [
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				},
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				},
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				},
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				},
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				},
				{
					moves: [
						{
							move: {
								name: "",
								url: ""
							}
						}
					],
					name: "empty",
					sprites: {
						front_default: Pokéball
					},
					types: [
						{
							type: {
								name: "",
								url: ""
							}
						}
					],
					exists: false
				}
			],
			teamURLs: this.props.teamURLs,
			myTeam: [],
			teamTypes: []
		};
	}

	componentDidMount() {
		this.setState({
			myTeam: this.state.emptyTeam
		});

		this.setTeam();
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.teamURLs !== this.props.teamURLs) {
			this.setState(
				{
					teamURLs: this.props.teamURLs,
					myTeam: this.state.emptyTeam,
					teamTypes: []
				},
				() => {
					this.setTeam();
				}
			);
		}
	}

	setTeam = () => {
		let index: number = 0;

		this.state.teamURLs.forEach(async member => {
			const memberRes: any = await Axios.get(member);
			let memberData: any = memberRes.data;
			let newTeam = this.state.emptyTeam;

			newTeam.splice(index, 1, memberData);

			this.setState(
				{
					myTeam: newTeam
				},
				() => {
					index++;

					if (index === this.props.teamURLs.length) {
						this.setTeamTypes();
					}
				}
			);
		});
	};

	setTeamTypes = () => {
		let teamTypes: any = [];
		let index: number = 0;

		this.state.myTeam.forEach(member => {
			index++;
			member.types.forEach((type: any) => {
				teamTypes.push(type.type);

				this.setState({
					teamTypes: teamTypes
				});
			});
		});
	};

	clearAll = () => {
		this.setState({
			teamURLs: [],
			myTeam: [],
			teamTypes: []
		});

		this.props.clearAll();
	};

	render() {
		const navButton = (
			<div
				className="btnWrapper"
				style={{
					...btnWrapper
				}}>
				<Link
					to="/teamPage"
					onClick={this.clearAll}
					style={{
						background: "none",
						border: "none"
					}}>
					<img className="navBtn" src={TrashCan} alt="CLEAR" />
				</Link>
				<Link to="/">
					<img className="navBtn" src={DexIcon} alt="BACK" />
				</Link>
			</div>
		);

		return this.props.isDesktop ? (
			<div style={teamBuilderStyle}>
				<TeamSuper
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>
				<MyTeam myTeam={this.state.myTeam} isDesktop={this.props.isDesktop} />
				<TeamWeak
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>

				{navButton}
			</div>
		) : (
			<div style={teamBuilderStyleMobile}>
				<MyTeam myTeam={this.state.myTeam} isDesktop={this.props.isDesktop} />
				<TeamSuper
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>
				<TeamWeak
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>

				{navButton}
			</div>
		);
	}
}

export default withRouter(TeamBuilder);

const teamBuilderStyleMobile: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding: "1rem",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "flex-start",

	overflow: "hidden"
};
const teamBuilderStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding: "1rem",

	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start"
};

const btnWrapper: React.CSSProperties = {
	position: "absolute",
	bottom: 0,

	width: "100%",

	borderRadius: ".5rem",

	display: "flex",
	justifyContent: "space-between"
};
