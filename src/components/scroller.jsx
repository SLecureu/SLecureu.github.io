import { useEffect, useState } from "react";
import "./scroller.scss";

const Scroller = () => {
    const sections = ["#about-me", "#skills", "#project", "#contact"];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight - 1;

            let newIndex = sections.findIndex((section) => {
                const element = document.querySelector(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    return (
                        scrollPosition >= top && scrollPosition < top + height
                    );
                }
                return false;
            });

            if (newIndex === -1) {
                newIndex = sections.length - 1;
            }

            setCurrentSectionIndex(newIndex);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    const handleScrollerClick = () => {
        if (isScrolling) return;

        const nextIndex = (currentSectionIndex + 1) % sections.length;
        const nextSection = sections[nextIndex];
        const nextElement = document.querySelector(nextSection);
        if (nextElement) {
            setIsScrolling(true);
            nextElement.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        }
    };

    if (currentSectionIndex === sections.length - 1) {
        return null;
    }

    return (
        <a
            className={`scroller ${isScrolling ? "disabled" : ""}`}
            href={sections[currentSectionIndex]}
            onClick={handleScrollerClick}
            style={{ pointerEvents: isScrolling ? "none" : "auto" }}
        >
            <span></span>
        </a>
    );
};

export default Scroller;
