import './More.css'

import MoreCard from '../MoreCard/MoreCard';

const More = () => {
    return (
        <section>
            <img src="../../../src/assets/BackImage/backimage1.png" alt="Background Galaxy Image" />
            <div className="more-container">
                <h2>More Information</h2>
                <MoreCard title="About Us" />
                <MoreCard title="Careers" />
            </div>
        </section>
    )
}

export default More;