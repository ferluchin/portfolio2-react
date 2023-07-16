// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <div className="logo">
            <img src="img/luis-granda-dev-1.png" alt="" />
          </div>
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  My Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About me
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  My Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* <!-- Introduction --> */}
        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
            Hi, I am <strong>Luis Granda</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            Full-Stack Developer
          </p>
          <img src="img/luis.jpeg" alt="Luis Granda " className="intro__img" />
        </section>

        {/* <!-- My services --> */}
        <section className="my-services" id="services">
          <h2 className="section__title section__title--services">What I do</h2>
          <div className="services">
            <div className="service">
              <h3>Design</h3>
              <p>
                I strive to create beautiful and intuitive web apps, meaning I
                design with both aestetics and usability in mind. You will get
                your designs delivered as Figma files, as websites or both.
              </p>
            </div>
            {/* <!-- / service --> */}

            <div className="service">
              <h3>Development</h3>
              <p>
                I am a versatile frontend developer with a speciality in React
                JS and Tailwind CSS. I also have a solid grip of the
                fundamentals of web development using HTML, CSS, and JavaScript.
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
          <h2 className="section__title section__title--about">Who I am</h2>
          <p className="section__subtitle section__subtitle--about">
            Front-End Developer & designer based out of Loja
          </p>

          <div className="about-me__body">
            <p>
              I'm a web developer and designer based out of Loja, EC. I love
              building apps that solve real-world problems, and that are
              delightful to use. My specialities include TypeScript, React JS,
              Tailwind CSS, and Styled Components.
            </p>
            <p>
              When I'm not coding, I enjoy travelling around my country. 
            </p>
          </div>

          <img
            src="img/dev-luis-02.jpg"
            alt="Dev on laptop PC"
            className="about-me__img"
          />
        </section>

        {/* <!-- My Work --> */}
        <section className="my-work" id="work">
          <h2 className="section__title section__title--work">My projects</h2>
          <p className="section__subtitle section__subtitle--work">
            A selection of my range of work
          </p>

          <div className="portfolio">
            {/* <!-- Portfolio item 01 --> */}
            <a
              href="https://investigacion-utpl.netlify.app/"
              className="portfolio__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="img/investigadores-utpl.png"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 02 --> */}
            <a
              href="https://sg-ascendere.liidutpl.ec/"
              className="portfolio__item"
                target="_blank" rel="noopener noreferrer"
            >
              <img
                src="img/sistema-ascendere.png"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 02 --> */}
            <a href="index.html" className="portfolio__item" target="_blank">
              <img
                src="img/oldagram-square.png"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 03 --> */}
            <a
              href="tenzies-item.html"
              className="portfolio__item"
              target="_blank"
            >
              <img src="img/tenzies.jpg" alt="" className="portfolio__img" />
            </a>

            {/* <!-- Portfolio item 04 --> */}
            <a
              href="portfolio-item.html"
              className="portfolio__item"
              target="_blank"
            >
              <img
                src="img/password-generator.jpg"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 05 --> */}
            <a
              href="portfolio-item.html"
              className="portfolio__item"
              target="_blank"
            >
              <img
                src="img/meme-generator.jpg"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 06 --> */}
            <a
              href="portfolio-item.html"
              className="portfolio__item"
              target="_blank"
            >
              <img
                src="img/personal-dashboard.png"
                alt=""
                className="portfolio__img"
              />
            </a>

            {/* <!-- Portfolio item 07  airbnb --> */}
            <a
              href="airbnb-item.html"
              className="portfolio__item"
              target="_blank"
            >
              <img
                src="img/experiences.png"
                alt=""
                className="portfolio__img"
              />
            </a>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="footer">
          {/* <!-- replace with your own email address --> */}
          <a href="mailto:lgrandab@gmail.com" className="footer__link">
            lgrandab@gmail.com
          </a>
          <ul className="social-list">
            <li className="social-list__item">
              <a
                className="social-list__link"
                href="https://codepen.io/ferluchin"
              >
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li className="social-list__item">
              <a className="social-list__link" href="http://dribbble.com">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-list__item">
              <a className="social-list__link" href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link"
                href="https://github.com/ferluchin"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </footer>

        <script src="js/index.js"></script>
      </div>
    </div>
  );
}

export default App;
