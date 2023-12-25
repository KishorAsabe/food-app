import React from "react";
import  ReactDOM  from "react-dom";
/*
 Header
    -logo
    -navitems
    -cart

Body 
   -searchbar
   -resturantlist
     -resturantCrad
        -image
        - name
        -rating
        -cuisines
Footer-
    -Links
    -copyright

*/


const Header = () => {
    return (
      
        <h1> hello jsx</h1>
     
    )
}


const AppLayout = ()=>{
    return(

      <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </React.Fragment>
    )
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)