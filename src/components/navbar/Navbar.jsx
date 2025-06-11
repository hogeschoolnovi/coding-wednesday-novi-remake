import './Navbar.css';
import novilogo from '../../assets/novi-logo-color-transparent.png';

function Navbar() {
	return (

		<nav className="navbar-wrapper">
			<div className="navbar-left-container">
			<span className="navbar-logo">
				<img src={novilogo} alt="NOVI Hogeschool logo"/>
			</span>

				<ul className="arrows">
					<div className="navbar-left-container">
						<li>Opleidingen</li>
						<span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="10" fill="currentColor">
  <path
	  d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/>
</svg>


                        </span>
					</div>
					<li>Studeren bij</li>
					<li>Zakelijk</li>
					<li>Over NOVI</li>
					<li>Contact</li>
				</ul>
			</div>

			<div className="navbar-controls">
				<p>Student login</p>
				<button type="button">Inschrijven</button>
			</div>

		</nav>


	);
}

export default Navbar;