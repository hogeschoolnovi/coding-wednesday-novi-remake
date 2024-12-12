import "./Testimonial.css"
import PlayButton from "../playbutton/PlayButton.jsx";
import arrow from '../../assets/icons/arrow-right.svg'

function Testimonial({img, title, text, linkText, altText}) {
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
      <p>{linkText}</p>
      <span>
          <img src={arrow} alt={altText}/>
      </span>
    </div>
  </article>)
}

export default Testimonial;