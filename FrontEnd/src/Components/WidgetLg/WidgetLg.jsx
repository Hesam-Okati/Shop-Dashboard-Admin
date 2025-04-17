import React from "react";
import "./WidgetLg.css";
import Transactions from "./datas";

export default function WidgetLg() {
  const Buttoms = ({ type }) => {
    return <button className={` WidgetLgButton ${type}`}>{type}</button>;
  };
  return (
    <div className="WidgetLg">
      <h1 className="WidgetLgTitle">Latest Transactions</h1>
      <table className="WidgetLgTable">
        <thead className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amout</th>
          <th className="WidgetLgTh">statue</th>
        </thead>
        {Transactions.map((item) => {
          return (
            <tbody key={item.id} className="WidgetLgTr">
              <td className="WidgetLgUser">
                <img className="WidgetLgimg" src={item.src} />
                <span className="WidgetLgName">{item.customer}</span>
              </td>
              <td className="WidgetLgDate">{item.date}</td>
              <td className="WidgetLgAmout">{item.aumout}</td>
              <td className="WidgetLgStatue">
                <Buttoms type={item.status} />
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
