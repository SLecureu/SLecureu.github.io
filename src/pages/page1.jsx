import { useContext } from "react";

import { pfp, LanguageContext } from "../import.js";
import "./page1.scss";

const Page1 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <main className="page1" id="about-me">
            <div className="page1__left">
                <div className="page1__left__round-shape">
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
                        {language == "fr"
                            ? `Je suis ouvert à toute technologie et j'ai déjà
                            utilisé React, Next.js, Go et d'autres encore dans mes projets.
                            Actuellement, j'étudie et je cherche de nouvelles opportunités.`
                            : `I am open to any technology and have been using
                        React, Next.js, Go, and more in my projects. Currently
                        studying and looking for new opportunities.`}
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
