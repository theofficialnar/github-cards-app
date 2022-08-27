import Card from '../Card';
import './CardList.css';

const CardList = ({ profiles }) => (
    <div>
        {profiles.length > 0
            ? profiles.map(profile => <Card key={profile.id} {...profile} />)
            : <span>Nothing to show here...</span>
        }
    </div>
)

export default CardList;