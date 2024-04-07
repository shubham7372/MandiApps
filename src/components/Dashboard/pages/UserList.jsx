import React from "react";

import Sidebar from "../components/Sidebar";
import "./pages.css";
import UserListPage from "./UserListPage";

const UserList = () => {
  return (
    <div className="dash-main">
      <Sidebar />
      <UserListPage />
    </div>
  );
};

export default UserList;