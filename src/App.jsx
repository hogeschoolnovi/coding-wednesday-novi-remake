import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import novilogo from './assets/novi-logo-color-transparent.png';
import Navbar from './components/navbar/Navbar.jsx';
import InformationCard from "./components/informationCard/InformationCard.jsx";

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

                        <div className="info-card-wrapper">
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Wil je leren hoe een netwerk in elkaar zit – én hoe je netwerkt? Met deze allround-ICT-opleiding rol je zo het bedrijfsleven in."
                                experienceNeeded={true}
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan peer banaan banaan banaan en andere tekst"
                                experienceNeeded={false}
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                        </div>
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Bootcamps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <div className="info-card-wrapper">
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                        </div>
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Cursussen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <div className="info-card-wrapper">
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Titel"
                                infoCardContent="Banaan banaan banaan kumquat banaan joepie"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                        </div>
                    </SectionContentWrapper>
                </section>
                <section>
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
