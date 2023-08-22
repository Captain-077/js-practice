import { useState } from "react";
import { Home_screen,About_screen } from "./constants";
import Header from "./header";
import AboutScreen from "./about";
import HomeScreen from "./home";


function Screener(){

const [currentScreen,changeCurrentScreen] = useState("No screen")

function renderScreen(){

  if (currentScreen == Home_screen){
    return(
    <HomeScreen/>
    )
  }

else if(currentScreen == About_screen){
  return(
  <AboutScreen/>
  )
}

else{
  return <section>No screen</section>
}

}

return (
  <div>
<Header onscreenchange= {changeCurrentScreen}
title = {currentScreen}
/>
{renderScreen()}

</div>

);
};

export default Screener