import './LatestUpdatesCard.css';

const LatestUpdatesCard = ({ update }) => {
    const getBadgeType = (game) => {
        if (game === 'HoYoverse') return 'company';
        if (game === '') return 'product';
        return 'product';
    };

    const getBadgeText = (game) => {
        if (game === 'HoYoverse') return 'Company';
        return 'Product';
    };

    const isLargeCard = update.id === 3;

    return (
        <div className={`latest-update-card ${isLargeCard ? 'large' : ''}`}>
            <img 
                src={update.image} 
                alt={update.game || 'Game update'} 
                className="card-image"
            />
            
            <div className={`card-badge ${getBadgeType(update.game)}`}>
                {getBadgeText(update.game)}
            </div>
            
            <div className="card-content">
                {update.game && (
                    <p className="game-name">{update.game}</p>
                )}
                <p className="content-text">{update.content}</p>
            </div>
        </div>
    );
};

export default LatestUpdatesCard;