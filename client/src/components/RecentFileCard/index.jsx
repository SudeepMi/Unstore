import { Button } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function RecentFileCard({ data }) {
  const FileIcon = (type) => {
    if(type === "docx" || type === "pdf" || type === "ppt"){
        return "ri-file-line";
    }
    else if(type === "png" || type === "jpg" || type === "jpeg" || type === "webp"){
        return "ri-image-line";
    }

    switch (type) {
      case "mp4":
        return "ri-film-line";
      case "mp3":
        return "ri-disc-line";
      default:
        return;
    }
  };
  return (
    <div className="recentFileCard__container">
      <div className="fileName">
        <i className={FileIcon(data.fileType)}></i>{data.fileName}.{data.fileType}
      </div>

      <div className="fileType">DOCX File</div>

      <div className="fileSize">7MB</div>

      <Button>
        <i className="ri-equalizer-line"></i>
      </Button>
    </div>
  );
}
