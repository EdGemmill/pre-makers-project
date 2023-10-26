import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ImageCard from "./ImageCard";

const ImagePage = (props) => {
    console.log(props);
    return (
        <div className="card-container">
            <h2>{props}</h2>
            <img src={props} alt="image" height={200} />
            <div className="desc"></div>
        </div>
    );
};

export default ImagePage;
