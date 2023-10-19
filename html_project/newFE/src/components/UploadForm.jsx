const UploadForm = () => {
    return (
        <div>
            <p>
            <form action="/action_page.php">
                <label for="imageTitle">Image title: </label>
                <input type="text" id="imageTitle" name="imageTitle" placeholder="Name your Image"/><br/>
                <input type="file" id="myFile" name="filename"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            </p>
        </div>
    )
}

export default UploadForm;