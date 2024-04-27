import NavLinks from "../NavLinks/NavLinks";
import Logo from "../../images/logo.svg";
import "./header.css";

function Header() {
	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="navbar-and-signup-wrapper">
				<NavLinks />
				<div className="register-login-wrap">
					<button className="login-btn">login</button>
					<button className="register-btn">Register</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
