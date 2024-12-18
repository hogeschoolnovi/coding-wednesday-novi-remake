import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import novilogo from './assets/novi-logo-color-transparent.png';
import Navbar from './components/navbar/Navbar.jsx';
import InformationCard from './components/informationCard/InformationCard.jsx';
import ItemLabel from './components/itemlabel/ItemLabel.jsx';
import log from "eslint-plugin-react/lib/util/log.js";

function App() {

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <Navbar/>
                    <h1>Dé hogeschool voor ICT</h1>
                </div>

                <SectionContentWrapper>
                    <div className="item-label-container">

                        <ItemLabel
                            title="3000+"
                            text="Actieve studenten"
                        />
                        <ItemLabel
                            title="6mnd"
                            text="gem. vrijstelling"
                        />
                        <ItemLabel
                            title="9,03"
                            text="rapportcijfer voor support"
                        />
                        <ItemLabel
                            title="50%"
                            text="studenten geen IT-ervaring"
                        />
                    </div>
                </SectionContentWrapper>
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
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Bedrijfskundige Informatica"
                            />
                            <InformationCard
                                infoCardTitle="Software development"
                                infoCardContent="Wil je leren hoe een netwerk in elkaar zit – én hoe je netwerkt? Met deze allround-ICT-opleiding rol je zo het bedrijfsleven in."
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Software development"
                            />
                            <InformationCard
                                infoCardTitle="Cyber security"
                                infoCardContent="Deze studierichting is misschien wel het meest dynamische vakgebied in de ICT. Hoe bescherm je een organisatie tegen cybercriminelen?"
                                experienceNeeded={true}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Cyber Security"
                            />
                            <InformationCard
                                infoCardTitle="Geo Business Intelligence"
                                infoCardContent="Locatiedata zijn tegenwoordig big business. Met deze studierichting breng je de wereld om je heen letterlijk in kaart."
                                experienceNeeded={true}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Geo Business Intelligence"
                            />
                        </div>
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Bootcamps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <div className="info-cards-container">
                            <InformationCard
                                infoCardTitle="Ethical Hacker"
                                infoCardContent="Een Ethical Hacker adviseert organisaties over de zwakke plekken in hun netwerk – en is sinds de invoering van de AVG dus goud waard."
                                experienceNeeded={true}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: "/>
                            <InformationCard
                                infoCardTitle="Full Stack Developer"
                                infoCardContent="Een Full Stack Developer is een allrounder en multitasker die met gemak een hele app ontwikkelt. Van design tot database."
                                experienceNeeded={true}
                                onClick={() => console.log("Navigeer naar pagina")}
                            />
                            <InformationCard
                                infoCardTitle="Web Developer"
                                infoCardContent="Een frontend developer of webdeveloper is de poortwachter van de digitale wereld. Ze bepalen wie op welke manier gebruik kan maken van digitale informatie en diensten."
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Web Developer"
                            />
                            <InformationCard
                                infoCardTitle="Security Officer"
                                infoCardContent="Een security officer kijkt naar data, processen en software vanuit een security oogpunt: hoe kan er misbruik gemaakt worden van een organisatie?"
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Security Officer"
                            />
                            <InformationCard
                                infoCardTitle="Data Engineer"
                                infoCardContent="Een data engineer of data-analist houdt zich bezig met het destilleren van waardevolle conclusies uit grote datasets."
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Data Engineer"
                            />
                        </div>
                    </SectionContentWrapper>
                    <SectionContentWrapper>
                        <h2>ICT-Cursussen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <div className="info-cards-container">
                            <InformationCard
                                infoCardTitle="HTML & CSS"
                                infoCardContent="Heb je altijd al je eigen website willen maken, maar weet je niet waar je moet beginnen?"
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: HTML & CSS"
                            />
                            <InformationCard
                                infoCardTitle="Introductie Hacking"
                                infoCardContent="Ben jij benieuwd hoe je inbreekt in een computersysteem en feilloos kwetsbaarheden herkent?"
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Introductie Hacking"
                            />
                            <InformationCard
                                infoCardTitle="Prototyping met Figma"
                                infoCardContent="In 5 praktijkdagen ga je een design system ontwikkelen en ga je het ontwerp gebruiken om een eigen web pagina vorm te geven a.d.h.v. de laatste design trends."
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Prototyping met Figma"
                            />
                            <InformationCard
                                infoCardTitle="Bouw je eigen ChatGPT-app"
                                infoCardContent="In deze 5-weekse cursus leer je stap voor stap hoe je jouw eigen GPT-webapp kunt bouwen en aanpassen, ongeacht je technische achtergrond."
                                experienceNeeded={false}
                                onClick={() => console.log("Navigeer naar pagina")}
                                ariaLabel="Button to page: Bouw je eigen ChatGPT-app"
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
