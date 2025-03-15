import { useContext } from "react";

import { pfp, LanguageContext } from "../import.js";
import "./page1.scss";

const Page1 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section className="page1" id="about-me">
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
                            ? `Je suis un développeur passionné par la datascience, le machine learning, et le cloud, et j’aimerais beaucoup avoir l’occasion de travailler dans ce secteur.`
                            : `I am a developer passionate about data science, machine learning, and cloud computing, and I would very much like to have the opportunity to work in this field.`}
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
        </section>
    );
};

export default Page1;
