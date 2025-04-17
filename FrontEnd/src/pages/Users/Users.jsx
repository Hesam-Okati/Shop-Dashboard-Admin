import React, { useEffect } from "react";
import { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import "./UserList.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

export default function Users() {
  const [UserDatas, SetUserDatas] = useState([]);

  useEffect(() => {
   fetch("http://localhost:3001/api/user/get-all")
      .then((res) => res.text())
      .then((data) => SetUserDatas  (JSON.parse(data)));
  }, []);

  const deleteHandler = (UID) => {
    SetUserDatas(UserDatas.filter((user) => user.id != UID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="Link">
            <div className="userListUser">
              <img src={params.row.avatar} className="UserListImg" />
              {params.row.userName}
            </div>
          </Link>
        );
      },  
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="Action">
            <Link to={"/"} className="Link">
              <button className="userListEdit">Edit</button>
            </Link>
            <MdDeleteOutline
              className="userListDelete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="UserList">
      <DataGrid
        rows={UserDatas}
        columns={columns}
        pagination
        initialState={{
          ...UserDatas.initialState,
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  );
}
