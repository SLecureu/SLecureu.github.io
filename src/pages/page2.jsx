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
        <main className="page2" id="skills">
            <img src={Birds} className="birds" />
            <section className="work">
                <h1>My Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <ul>
                    <li>
                        <strong>Lorem and Ipsum:</strong> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        <strong>Lorem and Ipsum:</strong> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        <strong>Lorem and Ipsum:</strong> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </section>

            <section className="skills">
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
            </section>
        </main>
    );
};

export default Page2;
