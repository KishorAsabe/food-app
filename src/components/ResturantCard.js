import {IMG_CDN_URL} from "../config"


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <div className="image-container">
          <img src={IMG_CDN_URL + cloudinaryImageId}   alt={name} />
          <div className="image-overlay"></div>
        </div>
        <h2 className="restaurant-name">{name}</h2>
        <h4 className="area">{area}</h4>
        <span className="details">
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <h4>{avgRating}</h4>
          </div>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
      </div>
    );
  };


  export default RestaurantCard;