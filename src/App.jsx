import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
            <Route path="*" element={<Error code="404" />} />
        </Routes>
    );
}

function Root() {
    return <>test</>;
}

function Error({ code }) {
    return <>code: {code}</>;
}

export default App;
