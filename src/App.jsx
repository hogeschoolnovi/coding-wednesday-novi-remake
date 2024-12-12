import './App.css'
import SectionContentWrapper
  from './components/sectionContentWrapper/SectionContentWrapper.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Testimonial from "./components/testimonial/Testimonial.jsx";
import testimonialsData from "./assets/testimonials-data.js";
import ReactPlayer from "react-player/vimeo.js";
import Modal from 'react-modal';
import {useState} from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url,setUrl] = useState("");

  function triggerVideo(input) {
    setUrl(input)
    openModal();
  }
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
                      onclick={triggerVideo}
                      url={testimonial.videoUrl}
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            width: '1200px',
            maxWidth: '99vw',
            borderRadius:'1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <ReactPlayer
          url={url}
          playing
          controls={true}
          width="1100px"
          height="717px"
          style={{ maxWidth: '90vw', maxHeight: '60vh'}}
        />
      </Modal>
    </>
  )
}

export default App
