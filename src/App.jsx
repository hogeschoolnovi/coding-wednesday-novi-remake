import './App.css'
import SectionContentWrapper
  from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import testiom from "./components/testimonial/Testimonial.jsx";
import Britnie from "./assets/britnie.jpg"
import testimonial from "./components/testimonial/Testimonial.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import testimonialsData from "./assets/testimonials-data.js";

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
               illum impedit inventore iste
               nostrum omnis quae, quam quis rem ut.</p>
          </SectionContentWrapper>
          <SectionContentWrapper>
            <h2>ICT-Bootcamps</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
               illum impedit inventore iste
               nostrum omnis quae, quam quis rem ut.</p>
          </SectionContentWrapper>
          <SectionContentWrapper>
            <h2>ICT-Cursussen</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
               illum impedit inventore iste
               nostrum omnis quae, quam quis rem ut.</p>
          </SectionContentWrapper>
        </section>
        <section className="testimonial-section">
          <SectionContentWrapper>
            <div className="title-box">
              <h1>Voor wie?</h1>
              <p>Deze mensen kozen voor een opleiding bij NOVI.</p>
            </div>
            <div className={"testimonial-cards"}>
              {
                testimonialsData.map((testimonial, index) => (
                  <Testimonial
                    key={testimonial.personName + index}
                    img={testimonial.imageUrl}
                    title={testimonial.personName}
                    text={testimonial.text}
                  />
                ))
              }
            </div>
          </SectionContentWrapper>
        </section>
        <section className="talentpool-section">
          <SectionContentWrapper>
            <h2>NOVI&apos;s Talent Pool</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
               illum impedit inventore iste
               nostrum omnis quae, quam quis rem ut.</p>
          </SectionContentWrapper>
        </section>
        <section className="news-section">
          <SectionContentWrapper>
            <h2>Meer NOVI?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
               illum impedit inventore iste
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
