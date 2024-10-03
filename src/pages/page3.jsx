import { useContext } from "react";

import { LanguageContext } from "../import.js";
import "./page3.scss";

const Page3 = () => {
    const { language } = useContext(LanguageContext);

    const projects = [
        {
            title: "Project Alpha",
            description:
                "A web-based application that helps users track their daily tasks and productivity.",
            liveLink: "#",
            sourceCode: "#",
        },
        {
            title: "Project Beta",
            description:
                "An e-commerce platform with real-time inventory management and secure payment gateways.",
            liveLink: "#",
            sourceCode: "#",
        },
        {
            title: "Project Gamma",
            description:
                "A mobile app that provides weather forecasts and travel recommendations based on the user's location.",
            liveLink: "#",
            sourceCode: "#",
        },
        {
            title: "Project Delta",
            description:
                "A multiplayer game developed using WebSockets for real-time communication between players.",
            liveLink: "#",
            sourceCode: "#",
        },
        {
            title: "Project Epsilon",
            description:
                "A portfolio website template with dynamic theme switching and multilingual support.",
            liveLink: "#",
            sourceCode: "#",
        },
    ];

    return (
        <section className="page3" id="project">
            <h1>My Finished Projects</h1>
            <div className="projects__grid">
                {projects.map((project, index) => (
                    <div className="project__card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project__links">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--view"
                            >
                                View Project
                            </a>
                            <a
                                href={project.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--code"
                            >
                                Source Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/* <h3>
                <a>
                    View more on <span>github</span>
                </a>
            </h3> */}
        </section>
    );
};

export default Page3;
