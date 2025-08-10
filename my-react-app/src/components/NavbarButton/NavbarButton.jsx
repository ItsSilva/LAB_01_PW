import './NavbarButton.css';

const NavbarButton = ({ label, onClick }) => {
	return (
		<a className='custom-navbar-button' onClick={onClick}>
			{label}
		</a>
	);
};

export default NavbarButton;