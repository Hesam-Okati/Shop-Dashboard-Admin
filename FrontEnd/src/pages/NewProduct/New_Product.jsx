import React, { useEffect } from "react";
import "./NewProduct.css";
import useMassager from "../../Hooks/useMassager";


function NewProduct() {



  return (
    <div className="NewProduct ">
      <div className="NewProduct-top">
        <h5>New Product</h5>
          
        <form action="http://localhost:3001/api/products/add" id="NewProduct-form" method="post">
          <input type="text" name="title" placeholder="Title Product" />
          <input type="text" name="desc" placeholder="Product Desc" />
          <input type="text" name="img_url" placeholder="Image Url ( ./assets/image/lt2.jfif )" />
          <input type="text" name="count" placeholder="Count" />
          <input type="text" name="price" placeholder="Price Product" />

          <select name="status" id="status">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <select name="isInstock" id="isInstock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <input  type="submit" value="Send" className="NewProduct-send" />
        </form>
      </div>

      
    </div>
  );
}

export default NewProduct;
