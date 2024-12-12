import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Britnie from "./assets/britnie.jpg"

function App() {

	return (
		<>
			<header className="header">
				<div className="header-content">
					<Navbar/>
					<h1>Dé hogeschool voor ICT</h1>
				</div>
			</header>
			<main>
				<section className="courses-section">
					<SectionContentWrapper>
						<h2>Onze hbo ICT-opleidingen</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>
					</SectionContentWrapper>

					<SectionContentWrapper>
						<h2>ICT-Bootcamps</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>
					</SectionContentWrapper>
					<SectionContentWrapper>
						<h2>ICT-Cursussen</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>
					</SectionContentWrapper>
				</section>
				<section className="testimonial-section">
					<SectionContentWrapper>
						<h1>Voor wie?</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>

						<section className={"testimonial-section"}>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={'Sarah heeft de bootcamp Full Stack Developer afgerond en kijkt terug op een fantastische tijd.'}
								linkText={"Bekijk Sarah's verhaal"}
							/>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={'Job is tijdens de bootcamp Ethical Hacker al in contact gekomen met het bedrijf waar hij vervolgens in dienst is getreden.'}
								linkText={"Bekijk Sarah's verhaal"}
							/>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, soluta."}
								linkText={"Bekijk Sarah's verhaal"}
							/>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, soluta."}
								linkText={"Bekijk Sarah's verhaal"}
							/>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, soluta."}
								linkText={"Bekijk Sarah's verhaal"}
							/>
							<Testimonial
								img={Britnie}
								title={"Sarah"}
								text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, soluta."}
								linkText={"Bekijk Sarah's verhaal"}
							/>




						</section>
					</SectionContentWrapper>
				</section>
				<section className="talentpool-section">
					<SectionContentWrapper>
						<h2>NOVI&apos;s Talent Pool</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>
					</SectionContentWrapper>
				</section>
				<section className="news-section">
					<SectionContentWrapper>
						<h2>Meer NOVI?</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
							nostrum omnis quae, quam quis rem ut.</p>
					</SectionContentWrapper>
				</section>
			</main>
			<footer className="footer-section">

			</footer>
		</>
	)
}

export default App
