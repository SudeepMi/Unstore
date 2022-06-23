import { Button } from "@mui/material";
import React from "react";
import "./styles/style.css";
import Categories from "../../helpers/Categories.json";
import RecentFiles from '../../helpers/RecentFiles.json'
import CategoryCard from "../CategoryCard";
import RecentFileCard from "../RecentFileCard";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      {/**
       * @section => search container
       */}
      <div className="search__container">
        <div className="input">
          <i className="ri-search-2-line"></i>
          <input type="text" placeholder="Search" />
        </div>
        <Button>
          <i className="ri-list-settings-line"></i>
        </Button>
      </div>

      {/**
       * @section => category container
       */}
      <div className="category__container">
        <h1 className="title">Category</h1>
        <div className="category__items">
          {Categories.map((data, index) => (
            <CategoryCard data={data} />
          ))}
        </div>
      </div>

      {/**
       * @section => recents container
       */}
      <div className="recents__container">
        <h1 className="title">Recent Files</h1>

        <div className="recentItems">
            {
                RecentFiles.map((data, index) => (
                    <RecentFileCard key={index} data={data}/>
                ))
            }
        </div>
      </div>

      <div className="uploadFiles__container">
        <p>Upload Files</p>
        <Button>Settings</Button>
      </div>
    </div>
  );
}
