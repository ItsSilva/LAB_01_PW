import './LatestUpdatesCard.css';

const LatestUpdatesCard = ({ update }) => {
    return (
        <div className="latest-update-card">
            <img src={update.image} alt={update.game} />
            <p>{update.game}</p>
            <p>{update.content}</p>
        </div>
    );
};

export default LatestUpdatesCard;