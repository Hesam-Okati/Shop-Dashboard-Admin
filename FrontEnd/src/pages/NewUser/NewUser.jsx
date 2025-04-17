import React, { useState } from "react";
import "./NewUser.css";

export default function NewUser() {
  const [Imagev, SetImage] = useState("./assets/image/face3.jfif");

  const imgval = (item) => {
    SetImage(item);

    console.log(item)
  };

  return (
    <>
      <div className="new-user">
        <form action="http://localhost:3001/api/user/new" method="post">
          <input
            className="input-nu"
            type="text"
            name="name"
            id="name"
            placeholder="Name ..."
          />
          <input
            className="input-nu"
            type="text"
            name="familly"
            id="familly"
            placeholder="Familly ..."
          />
          <input
            className="input-nu"
            type="password"
            name="pass"
            id="pass"
            placeholder="password ..."
          />
          <input
            className="input-nu"
            type="email"
            name="email"
            id="email"
            placeholder="Email ..."
          />
          <select className="input-nu" name="avatart" id="nu-avatar">
          
            <option className="black" value="./assets/image/face3.jfif" onClick={() => imgval("./assets/image/face3.jfif")}>
              image 1
            </option>
            <option className="black" value="./assets/image/face2.jfif" onClick={() => imgval("./assets/image/face2.jfif")}>
              image 2
            </option>
            <option className="black" value="./assets/image/face1.jfif" onClick={() => imgval("./assets/image/face1.jfif")}>
              image 3
            </option>
            <option className="black" value="./assets/image/face4.jfif" onClick={() => imgval("./assets/image/face4.jfif")}>
             image 4
            </option>
          </select>
          <input className="input-nu" type="submit" value={"Send"} />
        </form>

        <img className="nu-img" src={Imagev} alt="avatar" />
      </div>
    </>
  );
}
