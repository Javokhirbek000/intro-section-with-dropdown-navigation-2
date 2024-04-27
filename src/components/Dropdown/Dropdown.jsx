import "./dropdown.css";

function Dropdown(props) {
	return (
		<button className="dropdown-btn">
			<span>{props.text}</span>
			<span>
				<i className="fa-solid fa-chevron-up"></i>
			</span>
			{/* <i class="fa-solid fa-chevron-down"></i> */}
		</button>
	);
}

export default Dropdown;
