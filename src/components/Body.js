import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shemmer/ShimmerCardContainer ";
import {swiggy_api_URL} from "../config"
import { restaurantList } from "../config";
import { Link } from "react-router-dom";
import { RiCloudOffLine } from "react-icons/ri";
import useOnline from "../../Utils/Hooks/useOnline";


const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]); 
  const [filterdata , setFilterdata]   = useState([])
  const [searchInput, setSearchInput] = useState("");
  
const isOnline = useOnline()


  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      const restoList =  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setAllRestaurant(restoList); 
      setFilterdata(restoList);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  }

  const filter = (searchInput, allrestaurant) => {
    return allrestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));
  };


  // early return when user is offline show pls check your network connection
  
  if(!isOnline)
  {
    return <h1><RiCloudOffLine/> offline</h1>
  }

  //  write any pice of javascript code with culy bracket to  excute
 { console.log("online" , isOnline)}
   
  return filterdata?.length === 0? (<Shimmer/>) :(
    <>
        <div className="search-container">
            {/* serach feild captur then changing value */}
             <input type="text" className="search-input" placeholder="search" value={searchInput}
                onChange={(e)=>{setSearchInput(e.target.value)}}
             />

             {/* button */}
             <button onClick={()=>{
                const data = filter(searchInput,allrestaurant);
                setFilterdata(data)
             }}>search {searchInput}</button>
            </div>

      <div className="restaurant-list">
        {
          filterdata.map((restaurant)=>{
            return (
              <Link to={"/restaurant/" + restaurant.info.id} >
                <RestaurantCard {...restaurant?.info}/>
              </Link>
            )
          })
        }
      </div>
    </>
  );
};

export default Body;




