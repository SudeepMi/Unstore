import { Button } from "@mui/material";
import React from "react";
import './styles/style.css'

export default function CategoryCard({ data }) {
  return (
    <div className="categoryCard__container">
      <Button>
        <i className={data.icon}></i>
        <h2>{data.name}</h2>
        <p>{data.files} Files</p>
      </Button>
    </div>
  );
}
