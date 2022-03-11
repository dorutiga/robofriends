import './card-list.css';
import CardComponent from '../card-container/card-container.component';
const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <CardComponent monster={monster} />;
            })}
        </div>
    );
};

export default CardList;
