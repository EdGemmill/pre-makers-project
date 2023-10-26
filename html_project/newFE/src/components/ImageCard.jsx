import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ImageCard = (props) => {
    const image = props.image;

    return (
        <div className="card-container">
            <img src={image.body} alt="image" height={200} />
            <div className="desc">
                <h2>
                    <Link to={`/images/${image._id}`}>{image.title}</Link>
                </h2>
            </div>
        </div>
    );
};

export default ImageCard;
