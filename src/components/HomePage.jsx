import "./homepage.css";
import "../../src/css/default.css";
import "../../src/css/fonts.css";
import "../../src/css/layout.css";
import "../../src/css/magnific-popup.css";
import "../../src/css/media-queries.css";

import useOnScreen from "../hooks/useOnScreen";

import AnchorLink from "react-anchor-link-smooth-scroll";

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Anchor } from "antd";

function HomePage() {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155162916-1"
        ></script>

        <meta charset="utf-8" />
        <title>Alexis Ballo</title>
        <meta name="description" content="Check out Alexis' resume!" />
        <meta name="author" content="Alexis Ballo" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </Helmet>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="navoptions">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="navoptions">
              <AnchorLink href="#resume">Resume</AnchorLink>
            </li>
            <li className="navoptions">
              <AnchorLink href="#testimonials">testimonials</AnchorLink>
            </li>
            <li className="navoptions">
              <AnchorLink href="#contact">contact</AnchorLink>
            </li>
            <li className="navoptions">
              <AnchorLink href="#portfolio">portfolio</AnchorLink>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Alexis Ballo</h1>
            <h3></h3>
            <hr />
            <ul className="social">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100010979888714"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexis-ballo-6471191a7/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alexisballo/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/AlexisBallo2" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:alexispballo@gmail.com" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <AnchorLink className="" href="#resume">
            <i className="icon-down-circle"></i>
          </AnchorLink>
        </p>
      </header>
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Middlebury College</h3>
                <p className="info">
                  {" "}
                  Diploma Pending <span>&bull;</span>{" "}
                  <em className="date">In Progress</em>
                </p>

                <p></p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Baltimore City College</h3>
                <p className="info">
                  International Baccalaureate and High School Diploma{" "}
                  <span>&bull;</span> <em className="date">May 2021</em>
                </p>

                <p></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>National Center for Outdoor and Adventure Education</h3>
                <p className="info">
                  {" "}
                  EMT certification <span>&bull;</span>{" "}
                  <em className="date">April 2021</em>
                </p>

                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Pulse Medical Transport</h3>
                <p className="info">
                  EMT <span>&bull;</span>{" "}
                  <em className="date">July 2021 - Present</em>
                </p>

                <p>
                  Primary provider when transporting patients to/from medical
                  facilities.
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Maryland Science Center</h3>
                <p className="info">
                  Program Assistant <span>&bull;</span>{" "}
                  <em className="date">November 2018 - March 2020</em>
                </p>

                <p>
                  Worked to organize and run overnight activities for children
                  at the Maryland Science Center. Helped setup and cleanup
                  science activities and snack, prepare the students for
                  bedtime, and make sure children adhered to the schedule.
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>The Watershed</h3>
                <p className="info">
                  Busser <span>&bull;</span>{" "}
                  <em className="date">June 2021 - Present</em>
                </p>

                <p>Brought food to and cleaned up tables.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="notbars">
              <h3 className="">Hard Skills</h3>
              <ul className="newskill">
                <li>Emergency Medical Technician</li>
                <li>Website Building (HTML/CSS/JS)</li>
                <li>Python</li>
                <li>Wordpress</li>
              </ul>
              <h3 className="">Soft Skills</h3>
              <ul className="newskill">
                <li>Self-motivated</li>
                <li>Hard Worker</li>
                <li>Driven</li>
                <li>Compassionate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <div className="flexslider">
                <blockquote>
                  <p>
                    Alexis is an intelligent self-motivated young man with very
                    good creative critical thinking abilities.
                  </p>
                  <cite>Ken Altrell - Dept of Public Works Baltimore MD</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span></span>
            </h1>
          </div>

          <div className="seven columns">
            <h2 style={{ color: "white" }}>
              <span className="lead">Contact Me</span>
            </h2>
            <p>
              <span className="lead">
                {" "}
                Email at{" "}
                <a target="_blank" href="mailto:aballo@middlebury.edu">
                  aballo@middlebury.edu
                </a>
              </span>
            </p>
          </div>

          <div className="three columns action"></div>
        </div>
      </section>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100010979888714"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexis-ballo-6471191a7/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alexisballo/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/AlexisBallo2" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:alexispballo@gmail.com" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 AlexisBallo</li>
            </ul>
          </div>

          <div id="go-top">
            <AnchorLink className="" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </AnchorLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
