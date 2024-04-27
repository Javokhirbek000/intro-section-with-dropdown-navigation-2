import Dropdown from "../Dropdown/Dropdown";
import Link from "../Link/Link";
import "./nav-links.css";

function NavLinks() {
	return (
		<nav className="nav-bar">
			<Dropdown text='features' />
			<Dropdown text='company' />
			<Link text="careers" />
			<Link text="about" />
		</nav>
	);
}

export default NavLinks;
