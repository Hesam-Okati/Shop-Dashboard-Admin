import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import "./Feature.css";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featue-title">Reavanue</span>
        <div className="featureContainer">
          <span className="Feature-Money">$ 20.6</span>
          <span className="featureRate">
            -11.2
            <BsArrowDown className="featueIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>

      <div className="featureItem">
        <span className="featue-title">Sales</span>
        <div className="featureContainer">
          <span className="Feature-Money">51</span>
          <span className="featureRate">
            -4.7
            <BsArrowDown className="featueIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>
      <div className="featureItem">
        <span className="featue-title">Const</span>
        <div className="featureContainer">
          <span className="Feature-Money">$ 301 .6</span>
          <span className="featureRate">
            +15.2
            <BsArrowUp className="featueIcon" />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>
    </div>
  );
}
