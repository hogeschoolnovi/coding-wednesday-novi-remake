import './Testimonial.css'
import Sarah from "../../assets/sarahcomp3.jpg"
// 1. Alle html moet binnen die div vallen
// 2. class is className

function Testimonial() {
    return (
        <div className="error-message">
            <img className="items" src={Sarah}/>
            <h3 className="items">Sarah</h3>
            <p className="items"> Sarah heeft de bootcamp Full Stack Developer afgerond
            en kijkt terug op een fantastische tijd</p>
            <a href="http://" className={"items"}>Bekijk Sarah's verhaal</a>
        </div>
    )
}

export default Testimonial;