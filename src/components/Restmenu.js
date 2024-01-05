import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer"
import { swiggy_menu_api, RESTAURANT_TYPE_KEY,IMG_CDN_URL,DISH_ITEM_TYPE_KEY,MENU_ITEM_TYPE_KEY } from '../../src/config';

import UseRestaurant from '../../Utils/Hooks/useRestaurant';

  
const Restmenu = () => {
  const { id } = useParams();

  

  //we use hook to get  Rstaurant

  const {restaurant,menuItems} = UseRestaurant(id);



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
