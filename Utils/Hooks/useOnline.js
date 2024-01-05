//custom hoo for check use online or offline 

import{useState,useEffect} from 'react'
const useOnline = ()=>{

//make local varible to manage state 
const[isOnline , setIsOnline] = useState(true);

const handelOnline = ()=>
{
    setIsOnline(true);
}

const handelOffline = ()=>
{
    setIsOnline(false);
}
//we want set online or offline  based on their system status
//when paege first time render 
useEffect(()=>{
     window.addEventListener('online',handelOnline);
     window.addEventListener('offline',handelOffline);

     
//remove event listner 

return ()=>{
    window.removeEventListener('online',handelOnline);
    window.removeEventListener('offline',handelOffline);
}

},[])


return isOnline;


}
 export default useOnline;


 // when add eventlister or setinterval or setimout like async funtion  
// then we need to remove before unmounting then componet 
//means before leaving the page it should get clean otherwise it impact on performance 