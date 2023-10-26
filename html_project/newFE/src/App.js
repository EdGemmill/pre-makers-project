// import Base from "./components/Base.jsx";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import UploadForm from "./components/UploadForm.jsx";
import ImagesList from "./components/ImagesList.jsx";
import Head from "./components/Head.jsx";
import Foot from "./components/Foot.jsx";
import ImagePage from "./components/ImagePage.jsx";
import("./App.css");

// const Base = () => {
function App() {
    return (
        <div className="Base">
            <Head />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/upload" element={<UploadForm />} />
                <Route path="/images" element={<ImagesList />} />
                <Route path="/images/:image" element={<ImagePage />} />
            </Routes>
            <Foot />
        </div>
    );
}

export default App;
