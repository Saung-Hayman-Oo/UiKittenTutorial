import React from "react";
import { AppProvider } from "./src/components/templates/AppProvider";
import { RootScreen } from "./src/routes";

export const App:React.FC =()=>{
  return(
    <AppProvider>
       <RootScreen />
    </AppProvider>
  )
}