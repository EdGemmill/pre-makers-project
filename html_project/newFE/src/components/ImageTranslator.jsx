const encodeImageFileAsURL = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
        let fileToLoad = filesSelected[0];

        let fileReader = new FileReader();

        fileReader.onload = function (fileLoadedEvent) {
            let srcData = fileLoadedEvent.target.result; // <--- data: base64

            let newImage = document.createElement("img");
            newImage.src = srcData;

            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            alert(
                "Converted Base64 version is " +
                    document.getElementById("imgTest").innerHTML
            );
            console.log(
                "Converted Base64 version is " +
                    document.getElementById("imgTest").innerHTML
            );
        };
        fileReader.readAsDataURL(fileToLoad);
    }
};

export default encodeImageFileAsURL;
