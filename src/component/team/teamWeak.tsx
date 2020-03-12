import * as React from "react";
import DamageRelations from "./damageRelations";


interface Props {
	teamTypes: string[];
}

export default class TeamSuper extends React.Component<Props> {
	render() {
		return (
			<div style={superStyle}>
				<h2>Weaknesses</h2>
				<DamageRelations teamTypes={this.props.teamTypes} effect={"weak"} />
				<hr />
			</div>
		);
	}
}
const superStyle: React.CSSProperties = {
	height: "100%",
	width: "20%"
};