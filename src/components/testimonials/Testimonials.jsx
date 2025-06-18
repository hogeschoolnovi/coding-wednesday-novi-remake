import './Testimonials.css';
import VideoCard from "../videoCard/VideoCard.jsx";

function Testimonials() {
	return (
		<div className="testimonial-content">
			<h2>Voor wie?</h2>
			<p>Deze mensen kozen voor een opleiding bij NOVI.</p>
			<div className="video-testimonials">
				<VideoCard/>
				<VideoCard/>
				<VideoCard/>
				<VideoCard/>
				<VideoCard/>
				<VideoCard/>
			</div>
		</div>
	);
}

export default Testimonials;
