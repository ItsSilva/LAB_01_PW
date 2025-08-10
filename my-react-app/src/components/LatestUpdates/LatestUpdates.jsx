import './LatestUpdates.css';
import LatestUpdatesData from '../../data/LatestUpdatesData';
import Button from '../Button/Button';
import LatestUpdatesCard from '../LatestUpdatesCard/LatestUpdatesCard';

const LatestUpdates = () => {
    return (
        <section className="latest-updates">
            <div className="latest-updates-header">
                <h2>Latest Updates</h2>
                <Button label={'More'} />
            </div>
            <div className="latest-updates-list">
                {LatestUpdatesData.map(update => (
                    <LatestUpdatesCard key={update.id} update={update} />
                ))}
            </div>
        </section>
    );
};

export default LatestUpdates;