import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Button from './components/button/Button.jsx';

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
                        <Button name="button1"
                                onClick={() => console.log("Je hebt geklikt!")
                                }
                                label="Bekijk onze opleidingen"
                                arrow={true}
                        >
                        </Button>
                    </SectionContentWrapper>

                    <SectionContentWrapper>
                        <h2>ICT-Bootcamps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum impedit inventore iste
                            nostrum omnis quae, quam quis rem ut.</p>
                        <Button name="button1" label="Bekijk bootcamps" onClick={() => console.log("Je hebt geklikt!")
                        } arrow={false}/>
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
                        <Button name="button1" label="Voor studenten" onClick={() => console.log("Je hebt geklikt!")}
                                arrow={false}/>
                        <Button name="button1" label="Voor werkgevers" onClick={() => console.log("Je hebt geklikt!")}
                                arrow={false}/>
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
                <Button name="button3" label="Aanmelden nieuwsbrief" onClick={() => console.log("Je hebt geklikt!")}
                        arrow={false}/>

            </footer>
        </>
    )
}

export default App
