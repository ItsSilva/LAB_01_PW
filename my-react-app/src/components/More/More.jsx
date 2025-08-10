import './More.css'
import MoreCard from '../MoreCard/MoreCard';

const More = () => {
    return (
        <section className="more-section">
            <img 
                src="../../../src/assets/BackImage/backimage1.png" 
                alt="Background Galaxy Image" 
                className="more-background"
            />
            <div className="more-container">
                <MoreCard title="About Us" />
                <MoreCard title="Careers" />
            </div>
        </section>
    )
}

export default More;