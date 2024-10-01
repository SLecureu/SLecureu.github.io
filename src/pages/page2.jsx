import { useContext } from "react";

import { LanguageContext } from "../import.js";
import "./page2.scss";

const Page2 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <main className="page2" id="skills">
            <section className="work">
                <h1>My Work Methodology</h1>
                <p>
                    I approach each project with a structured, step-by-step
                    method to ensure the best possible outcome. My process is
                    focused on three key areas:
                </p>
                <ul>
                    <li>
                        <strong>Research and Planning:</strong> I start by
                        gathering all the requirements, understanding the
                        client's needs, and conducting thorough research.
                    </li>
                    <li>
                        <strong>Design and Development:</strong> Using modern
                        frameworks and tools, I translate the research into
                        functional, efficient, and beautiful code.
                    </li>
                    <li>
                        <strong>Testing and Optimization:</strong> After
                        development, I rigorously test and optimize for
                        performance, ensuring that the project meets the highest
                        standards.
                    </li>
                </ul>
                <p>
                    With a focus on clean code, scalability, and user
                    experience, I strive to deliver solutions that not only meet
                    the requirements but also exceed expectations.
                </p>
            </section>

            <section className="skills">
                <h1>Main Language Skills</h1>
                <div className="skills__list">
                    <div className="skill">
                        <h3>Go</h3>
                        <p>
                            Experience with Go for back-end development,
                            creating high-performance, concurrent applications
                            and APIs.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>JavaScript</h3>
                        <p>
                            Experienced in ES6+, React, Node.js, and building
                            full-stack applications.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>SCSS/Sass</h3>
                        <p>
                            Efficient in writing modular, scalable CSS using
                            preprocessors like Sass for larger projects.
                        </p>
                    </div>
                    <div className="skill">
                        <h3>TypeScript</h3>
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
