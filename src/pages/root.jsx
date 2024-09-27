import "./root.scss";

const Root = () => {
    return (
        <div className="page1">
            <div className="page1__left">
                <div className="page1__left__round-shape">
                    {/* <img
                    src={require("./greenThemeLight.png")}
                    alt="Jane Doe"
                    className="portfolio__image"
                /> */}
                </div>
            </div>

            <div className="page1__right">
                <div className="description">
                    <h2>Full Stack Developer</h2>
                    <h1>Simon Lecureux</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="buttons">
                        <button className="btn btn--download">
                            Download CV
                        </button>
                        <button className="btn btn--contact">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;
