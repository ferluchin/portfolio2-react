import React from "react";
import "./PersonalProjects.css";

function Projects() {
    return (
        <div>
            <h3 className="section__subtitle section__subtitle--work">
                Personal Projects
            </h3>
            {/* quizzical-react-luis-granda */}
            <div className="portfolio">

                {/* <!-- Portfolio item Video Game DB --> */}
                <a
                    href="videogame-db.html"
                    className="portfolio__item"
                    target="_blank"
                >
                    <div className="img-container">
                        <img
                            src="img/videogame-db.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">VideoGame DB (Angular)</h3>
                    </div>
                </a>

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
                        <h3 className="hover-text">Quizzical (React)</h3>
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
                        <h3 className="hover-text">Tenzies Game (React)</h3>
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
                        <h3 className="hover-text">AirBnb Experience (React)</h3>
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
                        <h3 className="hover-text">Firebase Mobile App
                            (React)
                        </h3>
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
                            Python Recommender System
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
                        <h3 className="hover-text">Meme Generator (React)</h3>
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
                            (React)
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
