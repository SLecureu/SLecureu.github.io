import { Route, Routes } from "react-router-dom";
import { Error404, Root } from "./import.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default App;
