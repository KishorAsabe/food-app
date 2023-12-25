import RestaurantCard from "./ResturantCard"
import {restaurantList}  from "../config"
import { useState } from "react";




const Body = () => {
   
    // making two local state variable 
     const[restaurant,setRestaurant] = useState(restaurantList)  //store restolist
     const[searchInput, setSearchInput] = useState() // store input text


    //filter the resto based on input text    
    const filter = (searchInput,restaurant)=>{
          
       return  restaurant.filter((restaurant)=> restaurant.data.name.toLowerCase().includes(searchInput))
    }
    
    return (
        <>
            <div className="search-container">
            {/* serach feild captur then changing value */}
             <input type="text" className="search-input" placeholder="search" value={searchInput}
                onChange={(e)=>{setSearchInput(e.target.value)}}
             />

             {/* button */}
             <button onClick={()=>{
                const data = filter(searchInput,restaurant);
                setRestaurant(data)
             }}>search {searchInput}</button>
            </div>
            
              
            <div className="restaurant-list">
                {restaurant.map((restaurant) => {
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />; // in data we have multiple elemet like name,cusines , rating thts why we use spread operator
                })}
            </div>
        </>
    );
  };

  export default Body;