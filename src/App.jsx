import './App.css'
import SectionContentWrapper from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import novilogo from './assets/novi-logo-color-transparent.png';
import Navbar from './components/navbar/Navbar.jsx';
import ItemLabel from "./components/itemlabal/ItemLabel.jsx";

function App() {

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <Navbar/>
                    <h1>Dé hogeschool voor ICT</h1>
                </div>

                <SectionContentWrapper>
                    <div className='item-label-container'>

                        <ItemLabel
                            title='3000+'
                            text='Actieve studenten'
                        />
                        <ItemLabel
                            title='6mnd'

                            text='gem. vrijstelling'
                        />
                        <ItemLabel
                            title='9,03'
                            text='rapportcijfer voor support'
                        />
                        <ItemLabel
                            title='50%'
                            text='studenten geen IT-ervaring'
                        />
                    </div>
                </SectionContentWrapper>
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
