import { useContext } from "react";

import {
    LanguageContext,
    Js_logo,
    Go_logo,
    Ts_logo,
    Sass_logo,
    Birds,
} from "../import.js";
import "./page2.scss";

const Page2 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section className="page2" id="skills">
            <img src={Birds} className="birds" />
            <div className="work">
                <h1>
                    {language == "fr"
                        ? `Ma méthode de
                    travail`
                        : `My Working Method`}
                </h1>
                <p>
                    {language == "fr"
                        ? `Ma méthode de travail est centrée sur l'adaptabilité, la
                    collaboration avec mes pairs, et l'efficacité dans la
                    création de projets tout en tenant compte des attentes et
                    besoins changeants.`
                        : ` My working method is focused on adaptability,
                    collaboration with my peers, and efficiency in project
                    creation while taking into account changing expectations 
                    and needs.`}
                </p>
                <ul>
                    <li>
                        {language == "fr" ? (
                            <>
                                <strong>Adaptation et Flexibilité:</strong> Je
                                peux réajuster rapidement mes priorités en
                                fonction des évolutions du projet ou de facteurs
                                extérieurs.
                            </>
                        ) : (
                            <>
                                <strong>Adaptability and Flexibility:</strong> I
                                can quickly adjust my priorities based on
                                project developments or external factors.
                            </>
                        )}
                    </li>
                    <li>
                        {language == "fr" ? (
                            <>
                                <strong>Collaboration Active:</strong> J’accorde
                                une importance particulière à la communication
                                continue avec toutes les parties prenantes.
                            </>
                        ) : (
                            <>
                                <strong>Active Collaboration:</strong> I place
                                great importance on continuous communication
                                with all stakeholders.
                            </>
                        )}
                    </li>
                    <li>
                        {language == "fr" ? (
                            <>
                                <strong>Amélioration Continue:</strong> Je
                                remets en cause et j'affine le travail au fur et
                                à mesure, assurant ainsi une progression
                                constante vers un produit final de haute
                                qualité.
                            </>
                        ) : (
                            <>
                                <strong>Continuous Improvement:</strong> I
                                challenge and refine the work as it progresses,
                                ensuring constant advancement towards a
                                high-quality final product.
                            </>
                        )}
                    </li>
                </ul>
            </div>

            <div className="skills">
                <h1>
                    {language == "fr"
                        ? `Principaux Langages Maitrisés`
                        : `Main Languages Mastered`}
                </h1>
                <div className="skills__list">
                    <div className="skill">
                        <h3>
                            Go
                            <img src={Go_logo} alt="Go logo" className="logo" />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Expérience en développement back-end avec Go,
                            création d'applications et d'API haute performance 
                            et concurrentes.`
                                : `Experience with Go for back-end development,
                            creating high-performance, concurrent applications
                            and APIs.`}
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            JavaScript
                            <img src={Js_logo} alt="Js logo" className="logo" />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Expérience avec ES6+, React, Node.js et la création
                            d'applications full-stack.`
                                : `Experienced in ES6+, React, Node.js, and building
                            full-stack applications.`}
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            SCSS/Sass
                            <img
                                src={Sass_logo}
                                alt="Sass logo"
                                className="logo"
                            />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Efficace dans l'écriture de CSS modulaire et évolutif
                            en utilisant des préprocesseurs comme Sass pour des projets de grande envergure.`
                                : `Efficient in writing modular, scalable CSS using
                            preprocessors like Sass for larger projects.`}
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            TypeScript
                            <img src={Ts_logo} alt="Ts logo" className="logo" />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Familiarité avec le typage statique et l'amélioration
                            des projets JavaScript en utilisant TypeScript pour une
                            meilleure qualité et maintenabilité du code.`
                                : `Familiar with static typing and enhancing JavaScript
                            projects using TypeScript for better code quality
                            and maintainability.`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page2;
