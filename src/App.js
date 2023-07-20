import "./App.css";
import Header from "./components/Header";
import WorkProjects from "./components/WorkProjects";
import PersonalProjects from "./components/PersonalProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div>
                <Header />

                {/* <!-- Introduction --> */}
                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Hi, I am <strong>Luis Granda</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        Full-Stack Developer
                    </p>
                    <img
                        src="img/luis.jpeg"
                        alt="Luis Granda "
                        className="intro__img"
                    />
                </section>

                {/* <!-- My services --> */}
                <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">
                        What I do
                    </h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design</h3>
                            <p>
                                I strive to create beautiful and intuitive web
                                apps, meaning I design with both aestetics and
                                usability in mind. You will get your designs
                                delivered as Figma files, as websites or both.
                            </p>
                        </div>
                        {/* <!-- / service --> */}

                        <div className="service">
                            <h3>Development</h3>
                            <p>
                                I am a versatile frontend developer with a
                                speciality in React JS and Tailwind CSS. I also
                                have a solid grip of the fundamentals of web
                                development using HTML, CSS, and JavaScript.
                            </p>
                        </div>
                        {/* <!-- / service --> */}

                        {/* <!-- Add more services if you want --> */}
                    </div>
                    {/* <!-- / services --> */}

                    <a href="#work" className="btn">
                        My Projects
                    </a>
                </section>

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
                    <WorkProjects />
                    {/* <!-- Personal Projects --> */}
                    <PersonalProjects />
                    {/* <!-- Contact Me --> */}
                </section>
                {/* <Contact /> */}
                {/* <!-- Footer --> */}
                <Footer />

                <script src="js/index.js"></script>
            </div>
        </div>
    );
}

export default App;
