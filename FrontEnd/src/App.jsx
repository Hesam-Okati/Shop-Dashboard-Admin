import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import route from "./routes";
import TopBar from "./Components/TopBarr/TopBar";
import SideBar from "./Components/sidebar/SideBar";
import "./App.css";

export default function App() {

  const [Settings , SetSettings] = useState({})

  useEffect( () => {
     fetch("http://localhost:3001/api/settings/")
      .then(res => res.text())
      .then(data => data ? SetSettings(JSON.parse(data)) : null)
  } , [])


  if(Settings) {
    localStorage.setItem("Theme" , Settings.Theme_color)
    localStorage.setItem("Site_name" , Settings.Site_Name)
  }

  let Route = useRoutes(route);
  return (
    <React.Fragment>
      <TopBar />
      <div className="container">
        <SideBar />
        {Route}
      </div>
    </React.Fragment>
  );
}
