import './OurProductsCard.css'
import OurProductsButton from '../OurProductsButton/OurProductsButton';

const OurProductsCard = ({ product }) => {
    return (
        <div className="our-products-card">
            <img src={product.image} alt={product.title} className="our-products-card-image" />
            <div className="our-products-card-content">
                <div className="our-products-card-info">
                    <img src={product.icon} alt={product.title} className="our-products-card-icon" />
                    <div className="our-products-card-text">
                        <h3 className="our-products-card-title">{product.title}</h3>
                        <p className="our-products-card-description">{product.description}</p>
                    </div>
                </div>
                <div className="our-products-card-button">
                    <OurProductsButton label="More" />
                </div>
            </div>
        </div>
    );
};

export default OurProductsCard;