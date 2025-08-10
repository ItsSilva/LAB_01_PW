import './MoreCard.css'
import { FaArrowRight } from "react-icons/fa6";

const MoreCard = ({ title }) => {
    return (
        <div className='more-card'>
            <div className="more-card-title-section">
                <h3>{title}</h3>
                <div className="more-card-line"></div>
            </div>
            <div className="more-card-footer">
                <button className="more-card-button">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default MoreCard;