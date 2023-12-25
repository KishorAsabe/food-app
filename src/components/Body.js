import RestaurantCard from "./ResturantCard"
import {restaurantList}  from "../config"


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };

  export default Body;