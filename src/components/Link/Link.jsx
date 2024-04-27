import "./link.css";

function Link(props) {
	return (
		<button type="button" className="link-btn">
			{props.text}
		</button>
	);
}

export default Link;
