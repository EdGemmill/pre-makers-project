import React, { useEffect, useState } from "react";
import "../App.css";
import ImageCard from "./ImageCard";
import axios from "axios";

function ImagesList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8082/images")
            .then((res) => {
                setImages(res.data);
            })
            .catch((err) => {
                console.log("Error from Images");
            });
    }, []);

    const imagesList =
        images.length === 0
            ? "there are no images!"
            : images.map((image, k) => <ImageCard image={image} key={k} />);

    return (
        <div>
            <div className="list">{imagesList}</div>
        </div>
    );
}

export default ImagesList;
