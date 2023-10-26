const Homepage = () => {
    return (
        <div>
            <h2>Welcome</h2>
            <body>
                <script>
                    document.body.className = ((document.body.className) ?
                    document.body.className + ' js-enabled' : 'js-enabled');
                </script>
                To a new place to upload pictures
            </body>
        </div>
    );
};

export default Homepage;
