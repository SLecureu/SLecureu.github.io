import { useState } from "react";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // const [language, setLanguage] = useState("en");

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        let root = document.documentElement;
        root.style.setProperty(
            "--first-color",
            isDarkMode ? "rgb(247, 255, 247)" : "rgb(52, 52, 52)"
        );
        root.style.setProperty(
            "--second-color",
            isDarkMode ? "rgb(52, 52, 52)" : "rgb(247, 255, 247)"
        );
    };

    // const handleLanguageChange = (event) => {
    //     setLanguage(event.target.value);
    // };

    return (
        <header className="portfolio__header">
            <button className="header__icon" onClick={handleToggleDarkMode}>
                {isDarkMode ? "🌞" : "🌙"}
            </button>
            {/* <div className="header__language">
                <select onChange={handleLanguageChange} value={language}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                </select>
            </div> */}
        </header>
    );
};

export default Header;
