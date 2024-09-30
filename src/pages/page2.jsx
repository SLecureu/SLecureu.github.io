import { useContext } from "react";

import { LanguageContext } from "../import.js";
import "./page2.scss";

const Page2 = () => {
    const { language } = useContext(LanguageContext);

    return <main className="page2">{language}</main>;
};

export default Page2;
