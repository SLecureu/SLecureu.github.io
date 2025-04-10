import { useContext } from "react";

import { LanguageContext, LanguageProvider } from "../import.js";
import "./page3.scss";

const Page3 = () => {
    const { language } = useContext(LanguageContext);

    const projects =
        language == "fr"
            ? [
                  {
                      title: "Social Network 01",
                      description: "Projet d'école, un réseau social",
                      liveLink: "https://github.com/cramanan/Social-Network-01",
                  },
                  {
                      title: "School Platform",
                      description: `C'est l'un des projets scolaire que j'ai réalisé.
            L'objectif était d'apprendre le langage de requête GraphQL en créant ma propre
            page de profil de la plateforme scolaire.`,
                      liveLink: "https://github.com/SLecureu/school-platform",
                  },
                  {
                      title: "NLP-Enriched News",
                      description: `Ce projet met en œuvre une plateforme d'actualités enrichie par 
                      le traitement du langage naturel (NLP) qui analyse les articles de presse, détecte les entités, 
                      classifie les sujets, effectue une analyse des sentiments, et identifie les potentiels scandales environnementaux.`,
                      liveLink: "https://github.com/SLecureu/NLP-enriched-News",
                  },
              ]
            : [
                  {
                      title: "Social Network 01",
                      description: "School project - a social network",
                      liveLink: "https://github.com/cramanan/Social-Network-01",
                  },
                  {
                      title: "School Platform",
                      description: `This is one of my school project that I've done.
            The goal was to learn the GraphQl query language, by creating my
            own profile page of the school platform.`,
                      liveLink: "https://github.com/SLecureu/school-platform",
                  },
                  {
                      title: "NLP-Enriched News",
                      description: `This project implements an NLP-enriched News platform that 
                      analyzes news articles, detects entities, classifies topics, performs sentiment analysis, 
                      and identifies potential environmental scandals.`,
                      liveLink: "https://github.com/SLecureu/NLP-enriched-News",
                  },
              ];

    return (
        <section className="page3" id="project">
            <h1>{language == "fr" ? "Quelques Projets" : "Some Projects"}</h1>
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
                                {language == "fr"
                                    ? "Voir Projet"
                                    : "View Project"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h3>
                {language == "fr" ? "Voir plus sur " : "View more on "}
                <a
                    href="https://github.com/SLecureu"
                    style={{ color: `#7f00ff` }}
                >
                    github
                </a>
            </h3>
        </section>
    );
};

export default Page3;
