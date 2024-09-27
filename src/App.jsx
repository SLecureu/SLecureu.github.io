import { Root, LanguageProvider } from "./import.js";
import "./app.scss";

function App() {
    return (
        <LanguageProvider>
            <Root />
        </LanguageProvider>
    );
}

export default App;
