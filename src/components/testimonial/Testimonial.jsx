import "./Testimonial.css"
import PlayButton from "../playbutton/PlayButton.jsx";
import {ArrowRight} from "@phosphor-icons/react"

function Testimonial({img, title, text, altText}) {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <article className="testimonial-card">
      <div className="image-container">
        <img src={img} alt={altText}/>
        <PlayButton
          className={'variant-img-container'}
        />
      </div>
      <p className={'video-card-title'}>{title}</p>
      <p className={'testimonial-text'}>{text}</p>
      <div className="link-box">
        <PlayButton
          className={'variant-link-box'}
        />
        <p>Bekijk {title}&#39;s verhaal</p>
        <span>
        <ArrowRight size={36} height={20} weight="bold"/>
      </span>
      </div>
    </article>)
}

export default Testimonial;