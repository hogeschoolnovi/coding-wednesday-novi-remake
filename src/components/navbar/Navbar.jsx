import './Navbar.css';
import novilogo from '../../assets/novi-logo-color-transparent.png';

function Navbar() {
	return (
		<nav className="navbar-wrapper">
			<span className="navbar-logo">
				<img src={novilogo} alt="NOVI Hogeschool logo"/>
			</span>
			<ul className="navbar-links">
				<li>Opleidingen</li>
				<li>Studeren bij</li>
				<li>Zakelijk</li>
				<li>Over NOVI</li>
				<li>Contact</li>
			</ul>
			<div className="navbar-controls">
				<p>Student login</p>
				<button type="button">Inschrijven</button>
			</div>
		</nav>
	);
}

export default Navbar;