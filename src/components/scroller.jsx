import { useEffect, useState } from "react";
import "./scroller.scss";

const Scroller = () => {
    const sections = ["#about-me", "#skills", "#project", "#contact"];
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;

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

    const preventScroll = () => {
        window.addEventListener("wheel", preventDefault, { passive: false });
        window.addEventListener("touchmove", preventDefault, {
            passive: false,
        });
        window.addEventListener("keydown", preventDefaultForScrollKeys);
    };

    const enableScroll = () => {
        window.removeEventListener("wheel", preventDefault, { passive: false });
        window.removeEventListener("touchmove", preventDefault, {
            passive: false,
        });
        window.removeEventListener("keydown", preventDefaultForScrollKeys);
    };

    const preventDefaultForScrollKeys = (e) => {
        const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (keys.includes(e.keyCode)) {
            e.preventDefault();
        }
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const handleScrollerClick = () => {
        if (isScrolling) return;

        const nextIndex = (currentSectionIndex + 1) % sections.length;
        const nextSection = sections[nextIndex];
        const nextElement = document.querySelector(nextSection);
        if (nextElement) {
            setIsScrolling(true);
            preventScroll();

            nextElement.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                setIsScrolling(false);
                enableScroll();
            }, 1000);
        }
    };

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
