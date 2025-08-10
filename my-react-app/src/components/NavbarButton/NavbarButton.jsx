import './NavbarButton.css';

const NavbarButton = ({ label, onClick, isActive = false }) => {
	return (
		<a 
			className={`custom-navbar-button ${isActive ? 'active' : ''}`} 
			onClick={onClick}
			role="button"
			tabIndex={0}
		>
			{label}
		</a>
	);
};

export default NavbarButton;