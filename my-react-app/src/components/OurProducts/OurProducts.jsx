import './OurProducts.css';

import OurProductsData from '../../data/OurProductsData';

import OurProductsCard from '../OurProductsCard/OurProductsCard';

const OurProducts = () => {
    return (
        <section className="our-products">
            <div className="our-products-header">
                <h2>Our Products</h2>
            </div>
            <div className="our-products-list">
                {OurProductsData.map(product => (
                    <OurProductsCard key={product.id} product={product} />
                ))
                }
            </div>
        </section>
    );
};

export default OurProducts;