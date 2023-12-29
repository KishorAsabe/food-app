import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { swiggy_menu_api, RESTAURANT_TYPE_KEY,IMG_CDN_URL,DISH_ITEM_TYPE_KEY,MENU_ITEM_TYPE_KEY } from '../config';
import Shimmer from "./Shimmer"

  
const Restmenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);


useEffect(()=>{
  getRestomenu()
},[])

  async function getRestomenu() {
    try {
      const response = await fetch(swiggy_menu_api + id);
      const json = await response.json();
      console.log(json)
      const restaurantData1 = json?.data?.cards?.map(x => x.card)
      const restaurantData = restaurantData1?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
     // console.log(restaurant)
     

     
      const menuItemsData = json?.data?.cards?.find((x)=>x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x)=>x.card?.card)?.filter(x=>x["@type"] == MENU_ITEM_TYPE_KEY)?.map(x => x.itemCards).flat()?.map(x => x.card?.info) ;
     
      // const menuItemsData1 = json?.data?.cards?.find((x)=>x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(x =>x.card?.card["@type"] == MENU_ITEM_TYPE_KEY)?.card?.card?.itemCards?.map((x)=>x.card?.info)
      // console.log("menuItemsData1",menuItemsData1)
      //to remove unique id warning
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
     
      setRestaurant(restaurantData)
     
 
      
     
     // console.log("menuItems",menuItems)
      
    } catch (e) {
      console.error(e);
      setMenuItems([]);
      setRestaurant(null);
    }
  }

  
  return (!restaurant  )?<Shimmer/>:(
    
    <div className="menu">
     <div>
     <img src={IMG_CDN_URL + restaurant.cloudinaryImageId }/>
      <h1>ID:{id}</h1>
      <h2>name:{restaurant.name}</h2>
      <h3> cost for two:{restaurant.costForTwoMessage}</h3>
    </div>
     
     <>
     <h1>Menu</h1>
      <ul>
        {
          menuItems?.map((menu)=><li key={menu?.id}>{menu?.name}</li>)
        }
      </ul>
     </>

    </div>
  );
};

export default Restmenu;







// In JavaScript, when you're accessing an object property whose name contains special characters or starts with characters that aren't allowed in variable names (like @type), you cannot directly use dot notation (object.property). Instead, you must use square bracket notation (object['property']) to access such properties.
