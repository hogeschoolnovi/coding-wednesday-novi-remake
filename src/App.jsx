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
                        <p>Tussen onze brede deeltijdopleidingen zit altijd wel een traject dat aansluit op jouw droombaan.</p>

                        <div className="info-cards-container">
                            <InformationCard
                                infoCardTitle="Bedrijfskundige informatica"
                                infoCardContent="Wil je leren hoe een netwerk in elkaar zit – én hoe je netwerkt? Met deze allround-ICT-opleiding rol je zo het bedrijfsleven in."
                                experienceNeeded={true}
                            />
                            <InformationCard
                                infoCardTitle="Software development"
                                infoCardContent="Wil je leren hoe een netwerk in elkaar zit – én hoe je netwerkt? Met deze allround-ICT-opleiding rol je zo het bedrijfsleven in."
                                experienceNeeded={false}
                            />
                            <InformationCard
                                infoCardTitle="Cyber security"
                                infoCardContent="Deze studierichting is misschien wel het meest dynamische vakgebied in de ICT. Hoe bescherm je een organisatie tegen cybercriminelen?"
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                            <InformationCard
                                infoCardTitle="Geo Business Intelligence"
                                infoCardContent="Locatiedata zijn tegenwoordig big business. Met deze studierichting breng je de wereld om je heen letterlijk in kaart."
                                experienceNeeded={true}
                                onClick="hier-link-naar-pagina"
                            />
                        </div>
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Bootcamps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <div className="info-cards-container">
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
                        <div className="info-cards-container">
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
