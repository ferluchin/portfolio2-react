import React from "react";
import "./WorkProjects.css";

function Projects() {
    return (
        <div>
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">
                A selection of my range of work
            </p>
            <h3 className="section__subtitle section__subtitle--work">
                Work Projects
            </h3>
            <div className="portfolio">
                {/* <!-- Portfolio item 01 --> */}
                <a
                    href="https://investigacion-utpl.netlify.app/"
                    className="portfolio__item"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Investigadores UTPL"
                >
                    <div className="img-container">
                        <img
                            src="img/investigadores-utpl.png"
                            alt="proyecto investigadores utpl"
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">
                            Proyecto Investigadores UTPL
                        </h3>
                    </div>
                </a>

                {/* <!-- Portfolio item PROYECTO ASCENDERE --> */}
                <a
                    href="https://sg-ascendere.liidutpl.ec/"
                    className="portfolio__item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="img-container">
                        <img
                            src="img/sistema-ascendere.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">
                            Proyecto Registro Convocatorias UTPL
                        </h3>
                    </div>
                </a>

                {/* <!-- Portfolio item ioet landing page --> */}
                <a
                    href="https://www.ioet.com/"
                    className="portfolio__item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="img-container">
                        <img
                            src="img/ioet.png"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="hover-text">Landing Page IOET</h3>
                    </div>
                </a>
            </div>
            <br />
        </div>
    );
}

export default Projects;
