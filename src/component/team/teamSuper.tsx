import * as React from "react";
import DamageRelations from "./damageRelations";

interface Props {
	teamTypes: any[];
	isDesktop: boolean;
}

export default class TeamSuper extends React.Component<Props> {
	render() {

		return (
			<div  style={this.props.isDesktop ? superStyle : superStyleMobile}>
				<h2>Supereffective</h2>
				<hr />
				<DamageRelations teamTypes={this.props.teamTypes} effect={"super"} isDesktop={this.props.isDesktop}/>
			</div>
		);
	}
}
const superStyleMobile: React.CSSProperties = {
	height: "100%",
	width: "50%"
};
const superStyle: React.CSSProperties = {
	height: "100%",
	width: "20%"
};
