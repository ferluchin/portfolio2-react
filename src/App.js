import "./App.css";
import Header from "./components/Header/Header";
import React, { Suspense, useEffect, useState } from "react";
//import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";

// Cargar secciones en diferido
const PersonalProjects = React.lazy(() =>
    import("./components/Personal/PersonalProjects")
);
const WorkProjects = React.lazy(() => import("./components/Work/WorkProjects"));
const Services = React.lazy(() => import("./components/Services/Services"));

function App() {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        if (stored) return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <>
            <a href="#main" className="skip-link">
                Saltar al contenido
            </a>
            <div className="App">
                <div>
                    <Header theme={theme} toggleTheme={toggleTheme} />

                    {/* <!-- Introduction --> */}
                    <section className="intro" id="home">
                        <h1 className="section__title section__title--intro">
                            Hi, I am <strong>Luis Granda</strong>
                        </h1>
                        <p className="section__subtitle section__subtitle--intro">
                            Full-Stack Developer
                        </p>
                        <img
                            src="img/luis-4.png"
                            alt="Luis Granda "
                            className="intro__img"
                        />
                    </section>

                    {/* <!-- My services --> */}
                    <Suspense fallback={<div className="lazy-fallback">Cargando…</div>}>
                        <Services />
                    </Suspense>

                    {/* <!-- About me --> */}
                    <section className="about-me" id="about">
                        <h2 className="section__title section__title--about">
                            Who I am
                        </h2>
                        <p className="section__subtitle section__subtitle--about">
                            Front-End Developer & designer based out of Loja
                        </p>

                        <div className="about-me__body">
                            <p>
                                I'm a web developer and designer based out of Loja,
                                EC. I love building apps that solve real-world
                                problems, and that are delightful to use. My
                                specialities include TypeScript, React JS, Tailwind
                                CSS, and Styled Components.
                            </p>
                            <p>
                                When I'm not coding, I enjoy travelling around my
                                country.
                            </p>
                        </div>

                        <img
                            src="img/dev-luis-02.jpg"
                            alt="Dev on laptop PC"
                            className="about-me__img"
                        />
                    </section>
                    <section className="my-work" id="work">
                        {/* <!-- My Work --> */}
                        <Suspense fallback={<div className="lazy-fallback">Cargando…</div>}>
                            <WorkProjects />
                        </Suspense>
                        {/* <!-- Personal Projects --> */}
                        <Suspense fallback={<div className="lazy-fallback">Cargando…</div>}>
                            <PersonalProjects />
                        </Suspense>
                        {/* <!-- Contact Me --> */}
                    </section>
                    {/* <Contact /> */}
                    {/* <!-- Footer --> */}
                    <Footer />

                    <script src="js/index.js"></script>
                </div>
            </div>
        </>
    );
}

export default App;
