import React, { useEffect } from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./Product.css";
import { Link } from "react-router-dom";
import { MdAdd, MdDeleteOutline } from "react-icons/md";

export default function Users() {
  const [ProductDatas, SetProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => SetProductData(data));
  }, []);

  const deleteHandler = (UID) => {
    SetProductData(ProductDatas.filter((user) => user.id !== UID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="Link">
            <div className="Prod-List-Product">
              <img src={params.row.img_url} alt="" className="Product-List-Img" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return <p className={params.row.status}>{params.row.status}</p>;
      },
    },
    {
      field: "Price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => {
        return <p className={params.row.price}>{params.row.price}</p>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="Action">
            <Link to={"/"} className="Link">
              <button className="ProductListEdit">Edit</button>
            </Link>
            <MdDeleteOutline
              className="Product-ListDelete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="Product-main">
      <div className="addProduct">
        <h2>Add Product</h2>
        <Link to={"/new-products"}>
        <MdAdd  className="ap-icon"/>
        </Link>
      </div>

      <div className="ProductList">
        <DataGrid
          rows={ProductDatas}
          columns={columns}
          checkboxSelection
          pagination
          initialState={{
            ...ProductDatas.initialState,
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
