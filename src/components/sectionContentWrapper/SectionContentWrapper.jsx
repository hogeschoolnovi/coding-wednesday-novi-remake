import './SectionContentWrapper.css';

function SectionContentWrapper({ children }) {
	return (
		<div className="section-wrapper">
			{children}
			<p> hoi</p>
		</div>
	);
}

export default SectionContentWrapper;