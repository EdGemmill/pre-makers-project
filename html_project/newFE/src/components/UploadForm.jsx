import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import encodeImageFileAsURL from "./ImageTranslator";
import { useNavigate } from "react-router-dom";
const encodeImageFileAsURL = require("./ImageTranslator");

const UploadForm = (props) => {
    const navigate = useNavigate();
    const [image, setImage] = useState({
        imageTitle: props.title,
        imageFile: props.body,
    });

    const onChange = (e) => {
        setImage({ ...image, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8082/images", image)
            .then((res) => {
                setImage({});
                navigate("/");
            })
            .catch((err) => {
                console.log("Error in CreateImage!");
            });
    };

    return (
        <div>
            <p>
                <form action="/action_page.php" noValidate onSubmit={onSubmit}>
                    <label for="imageTitle">Image title: </label>
                    <input
                        type="text"
                        id="imageTitle"
                        name="imageTitle"
                        placeholder="Name your Image"
                        value={image.imageTitle}
                        onChange={onChange}
                    />
                    <br />
                    <input
                        id="inputFileToLoad"
                        type="file"
                        onchange={encodeImageFileAsURL}
                    />

                    <script type="text/javascript">encodeImageFileAsURL</script>
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onSubmit={image.imageTitle + '"uploaded"'}
                    />
                </form>
            </p>
        </div>
    );
};

export default UploadForm;
