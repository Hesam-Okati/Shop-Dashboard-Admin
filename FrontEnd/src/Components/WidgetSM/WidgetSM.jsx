import React, { useEffect, useState } from "react";
import "./WidgetSM.css";
import { MdVisibility } from "react-icons/md";
// import Members from "./datas";

export default function WidgetSM() {
  const [users, SetUsers] = useState([]);
  useEffect(() => {
     fetch("http://localhost:3001/api/user/get-all")
      .then((res) => res.text())
      .then((data) => SetUsers(JSON.parse(data)));
  }, []);

  return (
    <div className="WidgetSM">
      <span className="WidgetSM-Title">New Join Members</span>
      {users.slice(0, 5).map((menber) => (
        <div key={menber.id}>
          <ul className="WidgetSMList">
            <li className="WidgetSMListItem">
              <img
                src={menber.avatar}
                alt="New members"
                className="WidgetSMIMG"
              />
              <div className="WidgetSMuser">
                <span className="WidgetSMuserName">{menber.name}</span>
                <span className="WidgetSMuserTitle">{menber.familly}</span>
              </div>
              <button className="WidgetSMButton">
                <MdVisibility className="WidgetSMIcon" />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
