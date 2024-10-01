import { useContext } from "react";

import {
    LanguageContext,
    Js_logo,
    Go_logo,
    Ts_logo,
    Sass_logo,
} from "../import.js";
import "./page2.scss";

const Page2 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <main className="page2" id="skills">
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
                <h1>Main Language Skills</h1>
                <div className="skills__list">
                    <div className="skill">
                        <h3>
                            Go
                            <img src={Go_logo} alt="Go logo" />
                        </h3>
                        <p>
                            Experience with Go for back-end development,
                            creating high-performance, concurrent applications
                            and APIs.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            JavaScript
                            <img src={Js_logo} alt="Js logo" />
                        </h3>
                        <p>
                            Experienced in ES6+, React, Node.js, and building
                            full-stack applications.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            SCSS/Sass
                            <img src={Sass_logo} alt="Sass logo" />
                        </h3>
                        <p>
                            Efficient in writing modular, scalable CSS using
                            preprocessors like Sass for larger projects.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>
                            TypeScript
                            <img src={Ts_logo} alt="Ts logo" />
                        </h3>
                        <p>
                            Familiar with static typing and enhancing JavaScript
                            projects using TypeScript for better code quality
                            and maintainability.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page2;
