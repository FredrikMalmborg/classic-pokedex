import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
	idUp: () => void;
	idDown: () => void;
}

export default class MainNavpad extends React.Component<Props> {
	render() {
		return (
			<div style={navpadStyle}>
				<button style={{ ...u, ...btn }} onClick={this.props.idUp}></button>
				<button style={{ ...r, ...btn }}></button>
				<Link to="/teamPage"style={{ ...btn, ...m }}></Link>
				<button style={{ ...l, ...btn }}></button>
				<button style={{ ...d, ...btn }} onClick={this.props.idDown}></button>
			</div>
		);
	}
}

const navpadStyle: React.CSSProperties = {
	width: "8rem",
	height: "8rem",
	marginBottom: "1rem",

	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gridTemplateRows: "1fr 1fr 1fr",
	gridTemplateAreas: "'. u .' 'l m r' '. d .'"
};

const u: React.CSSProperties = {
	gridArea: "u",

	borderRadius: ".5rem .5rem 0 0"
};
const r: React.CSSProperties = {
	gridArea: "r",

	borderRadius: " 0 .5rem .5rem 0"
};
const d: React.CSSProperties = {
	gridArea: "d",

	borderRadius: " 0 0 .5rem .5rem "
};
const l: React.CSSProperties = {
	gridArea: "l",

	borderRadius: ".5rem 0 0 .5rem"
};
const m: React.CSSProperties = {
	gridArea: "m"
	// borderRadius:"50%",
};

const btn: React.CSSProperties = {
	outline: "none",
	background: "#555",
	border: ".5rem solid #333"
};
