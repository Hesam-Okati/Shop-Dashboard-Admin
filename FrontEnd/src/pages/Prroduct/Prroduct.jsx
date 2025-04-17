import React from "react";
import "./Prroduct.css";
import { useParams } from "react-router";
import Products from "../products/Datas";
import { Link } from "react-router-dom";
import Charting from "../../Components/Chart/Charting";
import __Product__ from "./datas";
import { MdPublish } from "react-icons/md";

export default function Prroduct() {
  const Param = useParams().productID;
  const InfoProduct = Products.find((product) => product.id == Param);

  return (
    <div className="product">
      <div className="product-Title-container">
        <h1 className="DB product-Title">Product</h1>
        <Link to={"/new-products"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productInfoTop">
        <div className="productTopLeft">
          <Charting
            title="Sales in this month"
            data={__Product__}
            dataKey={"sales"}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/assets/image/lt1.jfif" className="productInfoIMG" />
            <span className="productName">{InfoProduct.title}</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID :</div>
              <div className="productInfoValue">{InfoProduct.id}</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Name :</div>
              <div className="productInfoValue">{InfoProduct.title}</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Sales :</div>
              <div className="productInfoValue">{InfoProduct.Price}</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">In Stock :</div>
              <div className="productInfoValue">No</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Active</div> 21
              <div className={`productInfoValue ${InfoProduct.status}d`}>
                {InfoProduct.status}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productInfoButton">
        <form className="productForm" method="post" action="http://localhost:3001/api/products/edit"> 
        <div className="productFormLeft">
            <label>Product Name : </label>
            <input type="text" name="title" placeholder="Laptop DELL" />

            <label>In Stock : </label>
            <select id="inStock" name="isInstock">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label>Active : </label>
            <select id="Active" name="status">
              <option value="Yes">Yes ✔</option>
              <option value="No">No </option>
              <option value="Now No">Now No </option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploder">
              <img src="/assets/image/lt2.jfif" alt="Profile icon" className="productUploderImg"/>
              <label>
                <MdPublish className="productUploderIconPublish"/>
              <input type="file" style={{display : "none"}}/>
              </label>
            </div>
            <button className="productButton">Upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
