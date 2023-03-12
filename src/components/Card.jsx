import './Card.css';

const Card = ({ item }) => {
  return (
    <figure className="Card">
      <img src={item.images['Poster Art'].url} alt={item.title} />
      <h3 onClick={(ev) => (ev.target.nextSibling.open = true)}>{item.title}</h3>
      <dialog className="detail-card">
        <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
        <div className="details-content">
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <div className="details-text">
            <h2>{item.title}</h2>
            <h3>{item.releaseYear}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </dialog>
    </figure>
  );
};

export default Card;
