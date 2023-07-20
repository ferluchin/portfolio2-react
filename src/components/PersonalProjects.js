import React from "react";


function Projects() {
    return (
        <div>
            <h3 className="section__subtitle section__subtitle--work">
                Personal Projects
            </h3>
            {/* quizzical-react-luis-granda */}
            <div className="portfolio">
                {/* <!-- Portfolio item Quizzical --> */}
                <a
                    href="quizzical-item.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/quizzical.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">Quizzical</h3>
                    </div>
                </a>

                {/* <!-- Portfolio item Tenzies Game --> */}
                <a
                    href="tenzies-item.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/tenzies.jpg"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">Tenzies Game</h3>
                    </div>
                </a>

                {/* <!-- Portfolio item Airbnb Experience --> */}
                <a
                    href="airbnb-item.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/experiences.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">AirBnb Experience</h3>
                    </div>
                </a>

                {/* <!-- Portfolio item Firebase App --> */}
                <a
                    href="firebase-item.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/firebase.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">Firebase Mobile App</h3>
                    </div>
                </a>

                {/* <!-- Portfolio item recommender-system --> */}
                <a
                    href="recommender-item.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/recommender.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">
                            Sistema Recomendador Python
                        </h3>
                    </div>
                </a>
                {/* <!-- Portfolio javascript RPG --> */}
                <a
                    href="javascript-rpg.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/javascript-rpg.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">Javascript RPG Game</h3>
                    </div>
                </a>
                {/* <!-- Portfolio item meme-generator --> */}
                <a
                    href="meme-generator.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/meme-generator.jpg"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">React Meme Generator</h3>
                    </div>
                </a>

                {/* <!-- Portfolio item movie pitch --> */}
                <a
                    href="movie-pitch.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/movie-pitch.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">
                            Dall E Movie Pitch Generator
                        </h3>
                    </div>
                </a>

                {/* <!-- Portfolio item Notes App --> */}
                {/* <a
                            href="movie-pitch.html"
                            className="portfolio__item"
                            target="_blank"
                        >
                            <img
                                src="img/movie-pitch.png"
                                alt=""
                                className="portfolio__img"
                            />
                        </a> */}

                {/* <!-- Portfolio item React Info Site --> */}
                {/* <a
                            href="movie-pitch.html"
                            className="portfolio__item"
                            target="_blank"
                        >
                            <img
                                src="img/movie-pitch.png"
                                alt=""
                                className="portfolio__img"
                            />
                        </a> */}

                {/* <!-- Portfolio item Advanced React #VANLIFE --> */}
                {/* <a
                            href="movie-pitch.html"
                            className="portfolio__item"
                            target="_blank"
                        >
                            <img
                                src="img/movie-pitch.png"
                                alt=""
                                className="portfolio__img"
                            />
                        </a> */}
            </div>
        </div>
    );
}

export default Projects;
