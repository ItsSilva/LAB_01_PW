import './OurProductsButton.css';

const OurProductsButton = ({ label, onClick }) => {
	return (
		<button className='custom-button-products' onClick={onClick}>
			{label}
		</button>
	);
};

export default OurProductsButton;