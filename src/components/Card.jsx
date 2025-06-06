import StarFill from "../assets/Star_fill.svg";
import Star from "../assets/Star.svg";

export default function Card({ coffee }) {
  const { id, name, image, price, rating, votes, popular, available } = coffee;
  return (
    <div key={id} className="card">
      <img className="image" src={image} alt={name} />
      <div className="flex-space">
        <p>{name}</p>
        <p className="price">{price}</p>
      </div>
      <div className="flex-space">
        <div className="flex">
          <img className="starRating" src={rating !== null ? StarFill : Star} />
          <p>{rating !== null && rating}</p>
          <p className="votes">{votes !== 0 ? `(${votes} votes)` : "No ratings"}</p>
        </div>
        <p className="available">{!available && "Sold out"}</p>
      </div>
      {popular && <p className="popular">Popular</p>}
    </div>
  );
}
