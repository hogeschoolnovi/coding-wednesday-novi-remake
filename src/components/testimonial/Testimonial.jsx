import "./Testimonial.css"

function Testimonial({img, title, text, linkText}) {
  return (
    <article className="testimonial-card">
      <img src={img} alt=""/>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#">{linkText}</a>
    </article>
  )
}

export default Testimonial;