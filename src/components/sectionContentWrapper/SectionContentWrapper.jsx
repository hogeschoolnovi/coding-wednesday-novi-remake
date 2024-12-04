import './SectionContentWrapper.css';

function SectionContentWrapper({ children }) {
	return (
		<div className="section-wrapper">
			{children}
		</div>
	);
}

export default SectionContentWrapper;