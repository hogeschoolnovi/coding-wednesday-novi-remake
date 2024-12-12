import "./Testimonial.css"
import PlayButton from "../playbutton/PlayButton.jsx";
import { ArrowRight } from "@phosphor-icons/react"
function Testimonial({img, title, text, altText}) {
  return (<article className="testimonial-card">
    <a href="#">
      <div className="image-container">
        <img src={img} alt={altText}/>
        <PlayButton
          className={'variant-img-container'}
        />
      </div>
    </a>
    <p className={'video-card-title'}>{title}</p>
    <p className={'testimonial-text'}>{text}</p>
    <div className="link-box">
      <PlayButton
        className={'variant-link-box'}
      />
      <p>Bekijk {title}&#39;s verhaal</p>
      <span>
        <ArrowRight size={36} height={20} weight="bold" />
      </span>
    </div>
  </article>)
}

export default Testimonial;