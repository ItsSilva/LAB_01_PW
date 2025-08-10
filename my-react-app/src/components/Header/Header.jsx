import './Header.css';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

const Header = () => {
	return (
		<header className='custom-header'>
            <img src="../../../src/assets/header.jpg" alt="Honkai: Star Rail" />
            <div>
            <img src='../../../src/assets/appicon.png' alt='Logo' className='logo' />
			<p>Honkai: Star Rail</p>
            </div>

            <div>
            <p>Honkai: Star Rail V3.4 "For the Sun is Set to Die" Is Now Online!</p>
            </div>

            <div>
			<ButtonHeader />
            </div>
		</header>
	);
};

export default Header;