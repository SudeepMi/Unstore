import React from "react";
import { Button } from "@mui/material";
import "./app.css";
import Sidebar from "./helpers/Sidebar.json";
import SidebarButton from "./components/SidebarBtn";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="app__container">
      {/**
       * @section => sidebar
       */}
      <div className="sidebar__container">
        <div className="title">
          <h1 className="logo">U</h1>
          <span>
            <h1>Unstore</h1>
            <p>Store Unlimited Files</p>
          </span>
        </div>

        <div className="sidebar__buttons">
          <ul>
            {Sidebar.map((data, index) => (
              <li key={index}>
                <SidebarButton data={data} />
              </li>
            ))}
          </ul>
        </div>

        <SidebarButton
          data={{ icon: "ri-logout-box-line", name: "Collapse" }}
        />
      </div>

      {/**
       * @section => main
       */}
      <div className="main__container">
        <Dashboard />
      </div>

      {/**
       * @section => sidebar right
       */}
      <div className="sidebarRight__container">
        <div className="userAuthentication">
          <div>
            <p>Hello!</p>
            <p className="userName">Domsan Lex</p>
          </div>

          <Button>Dropdown Icon</Button>
        </div>

        <Button className="addNewFile">Add New +</Button>

        <div className="storageStatus"></div>
      </div>
    </div>
  );
}
