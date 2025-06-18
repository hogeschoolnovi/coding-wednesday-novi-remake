import './Header.css';
import novilogo from '../../assets/novi-logo-color-transparent.png';
import noviscreenshotheader from '../../assets/novi-screenshot-header.webp'

function Header() {
	return (
		<header className='header-wrapper'>
			<div className='header-text'>
				<p className='header-highlight'>Join 3000+ Novi studenten</p>
				<h1>Enter de wereld van IT</h1>
				<p>Bij NOVI leer je hoe je bouwt aan die digitale wereld. Wil jij niet toekijken, maar meedoen? Praktisch, flexibel en met directe impact op jouw carrière. Of je nu wilt starten, switchen of doorgroeien — hier zit jij aan de knoppen.</p>
				<ul>
					<li>Snel omscholen</li>
					<li>Flexibel leren</li>
					<li>Erkende kwaliteit</li>
				</ul>
				{/*<button type='button'>IMPORTEREN UIT NOG TE MAKEN BUTTON COMPOMENT</button>*/}
			</div>
			<span className='image-wrapper'>
				<img src={noviscreenshotheader} alt ='Office Novi'/>
			</span>
		</header>
	);
}

export default Header;