import './MoreCard.css'
import { FaArrowRight } from "react-icons/fa6";

const MoreCard = ({ title }) => {
    return (
        <div className='more-card'>
            <h3>{title}</h3>
            <footer>
                <button>
                    <FaArrowRight />
                </button>
            </footer>
        </div>
    )
}

export default MoreCard;