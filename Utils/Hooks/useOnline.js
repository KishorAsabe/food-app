//custom hoo for check use online or offline 

import{useState,useEffect} from 'react'
const useOnline = ()=>{

//make local varible to manage state 
const[isOnline , setIsOnline] = useState(true);

//we want set online or offline  based on their system status
//when paege first time render 
useEffect(()=>{
     window.addEventListener('online',()=>setIsOnline(true));
     window.addEventListener('offline',()=>setIsOnline(false));
},[])

return isOnline;


}
 export default useOnline;