import { useContext } from "react";

import {
    LanguageContext,
    Js_logo,
    Go_logo,
    rust_logo,
    python_logo,
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
                            Python
                            <img
                                src={python_logo}
                                alt="Python logo"
                                className="logo"
                            />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Efficace dans le développement de modèles de machine learning robustes et évolutifs
en utilisant des bibliothèques comme scikit-learn pour des projets d'analyse de données complexes.`
                                : ` Proficient in developing robust and scalable machine learning models
using libraries such as scikit-learn for complex data analysis projects.`}
                        </p>
                    </div>
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
                            Rust
                            <img
                                src={rust_logo}
                                alt="Rust logo"
                                className="logo"
                            />
                        </h3>
                        <p>
                            {language == "fr"
                                ? `Efficace dans la création de systèmes concurrents et sécurisés
en exploitant les fonctionnalités avancées de Rust telles que les traits, les génériques et le pattern matching pour des applications robustes et performantes`
                                : `Proficient in building concurrent and secure systems
leveraging Rust's advanced features such as traits, generics, and pattern matching for robust and high-performance applications`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page2;
