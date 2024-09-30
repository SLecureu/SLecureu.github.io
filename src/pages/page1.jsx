import { useContext } from "react";

import { pfp, LanguageContext } from "../import.js";
import "./page1.scss";

const Page1 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <main className="page1 gap">
            <div className="page1__left border_gap">
                <div className="page1__left__round-shape border_gap">
                    <img src={pfp} alt="Simon Lecureux" />
                </div>
            </div>

            <div className="page1__right">
                <div className="description">
                    <h2>
                        {language == "fr"
                            ? "Developpeur Full-Stack"
                            : "Full Stack Developer"}
                    </h2>
                    <h1>Simon Lecureux</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="buttons">
                        <button className="btn btn--download">
                            {language == "fr"
                                ? "Télécharger CV"
                                : "Download CV"}
                        </button>
                        <button className="btn btn--contact">Contacts</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page1;
