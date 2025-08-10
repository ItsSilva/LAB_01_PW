import './OurProductsCard.css'
import OurProductsButton from '../OurProductsButton/OurProductsButton';

const OurProductsCard = ({ product }) => {
    return (
        <div className="our-products-card">
            <img src={product.image} alt={product.title} className="our-products-card-image" />
            <div className="our-products-card-content">
                <img src={product.icon} alt={product.title} className="our-products-card-icon" />
                <h3 className="our-products-card-title">{product.title}</h3>
                <p className="our-products-card-description">{product.description}</p>
                <OurProductsButton />
            </div>
        </div>
    );
};

export default OurProductsCard;