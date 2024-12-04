import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import TitleSubtitle from "./components/TitleSubtitle/TitleSubtitle.jsx";

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
                        <TitleSubtitle
                            className="section-title-white"
                            title="Hier komt de TITEL"
                            subTitle="Hier komt de subtitel of paaragraaf onder de titel"
                        />
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Cursussen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                    </SectionContentWrapper>
                </section>
                <section className="testimonial-section">
                    <SectionContentWrapper>
                        <h2>Voor wie?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
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
                        <TitleSubtitle
                            className="section-title-black"
                            title="Hier komt de TITEL"
                            subTitle="Hier komt de subtitel of paaragraaf onder de titel"
                        />
                    </SectionContentWrapper>
                </section>
            </main>
            <footer className="footer-section">

            </footer>
        </>
    )
}

export default App
