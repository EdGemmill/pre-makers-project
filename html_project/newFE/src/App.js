import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import UploadForm from "./components/UploadForm";
import ImagesList from "./components/ImagesList";
import Head from "./components/Head";
import Foot from "./components/Foot";

function App() {
    return (
        <div className="App">
            <Head/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/upload' element={<UploadForm />}/>
                <Route path="/view" element={<ImagesList />} />
            </Routes>
            <Foot/>
        </div>
    );
}

export default App;
