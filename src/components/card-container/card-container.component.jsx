import './card.css';
const CardComponent = ({ monster }) => (
    <div className="card-container" key={monster.id}>
        <img
            alt={`monster ${monster.name}`}
            src={`https://robohash.org/${monster.id}`}
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
    </div>
);

export default CardComponent;
