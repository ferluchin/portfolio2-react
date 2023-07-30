import React from "react";
import "./Services.css";

function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">
                My Expertise
            </h2>
            <div className="services">
                <div className="service">
                    <h3>Design & User Experience</h3>
                    <p>
                        With a passion for aesthetics and functionality, I
                        design intuitive and attractive web applications. My
                        designs are delivered as Figma files, websites, or both,
                        always prioritizing usability.
                    </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                    <h3>Web & Mobile Development</h3>
                    <p>
                        As a versatile frontend developer with a specialization
                        in React JS and Angular Framework, I offer effective
                        development solutions. I have a solid grasp of the
                        fundamentals of web development including HTML, CSS, and
                        JavaScript, and experience in mobile app development
                        with Swift.
                    </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                    <h3>Data Analysis & Machine Learning</h3>
                    <p>
                        With an analytical focus, I optimize large scale data
                        processing and apply data modeling techniques and trend
                        analysis. I also have experience in developing and
                        implementing machine learning algorithms.
                    </p>
                </div>
                {/* <!-- / service --> */}
            </div>
            {/* <!-- / services --> */}

            <a href="#work" className="btn">
                See My Projects
            </a>
        </section>
    );
}

export default Services;
