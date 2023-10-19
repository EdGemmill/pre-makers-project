import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/view">View images</Link>
        </nav>
    );
};

export default Navbar;
