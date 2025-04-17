import React from "react"; 
import Feature from "../../Components/Feature/Feature";
import "./Home.css";
import Charting from "../../Components/Chart/Charting";
import XaxisDATA from "../../Components/Chart/data";
import WidgetSM from "../../Components/WidgetSM/WidgetSM";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";

export default function Home() {



  return (
    <React.Fragment>
      <div className="home">
         <Feature />
            
            <Charting
              grid
              data={XaxisDATA}
              title="Sale Month"
              dataKey="Sale"
            />
            <div className="homeWidgets">
              <WidgetSM />
              <WidgetLg />
            </div>
      </div>

    </React.Fragment>
  );
}
