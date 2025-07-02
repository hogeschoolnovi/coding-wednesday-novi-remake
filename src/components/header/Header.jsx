import './Header.css';
import noviscreenshotheader from '../../assets/novi-screenshot-header.webp'

function Header() {
	return (
		<header className='header-wrapper'>
			<div className='header-text'>
				<h1>Enter de wereld van IT</h1>
				<p className='intro'>Bij NOVI leer je hoe je bouwt aan die digitale wereld. Wil jij niet toekijken, maar meedoen? Praktisch, flexibel en met directe impact op jouw carrière. Of je nu wilt starten, switchen of doorgroeien — hier zit jij aan de knoppen.</p>
				<ul>
					<li className='list-item-title'>Snel omscholen</li>
					<li>In 20 weken aan de slag als junior IT’er</li>
					<li className='list-item-title'>Flexibel leren</li>
					<li>Jouw route, jouw tempo, jouw keuzes</li>
					<li className='list-item-title'>Erkende kwaliteit</li>
					<li>Geaccrediteerd en direct toepasbaar in de praktijk</li>
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