import { useContext } from "react";
import { LanguageContext } from "../import.js";
import { Mail, Linkedin } from "lucide-react";

import "./page4.scss";

const Page4 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section className="page4" id="contact">
            <h1 className="contact-title">
                {language == "fr" ? "Contactez moi" : "Contact me"}
            </h1>
            <div className="contact-card">
                <div className="contact-item">
                    <Mail className="icon" />
                    <h3>
                        {language == "fr" ? "Adresse Email" : "Email Address"}
                    </h3>
                    <a href="mailto:sprolecureux@gmail.com">
                        sprolecureux@gmail.com
                    </a>
                </div>
                <div className="contact-item">
                    <Linkedin className="icon linkedin" />
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/simonlecureux/">
                        My page
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Page4;
