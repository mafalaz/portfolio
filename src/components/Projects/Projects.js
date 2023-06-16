import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webPortofolio from "../../Assets/Projects/webPortofolio.png";
import IndoLoker from "../../Assets/Projects/indoLoker.png";
import sciport from "../../Assets/Projects/sciport.png";
import jaktrans from "../../Assets/Projects/jaktrans.png";
import landingPage from "../../Assets/Projects/landingPage.png";
import jakartaEmergency from "../../Assets/Projects/jakartaEmergency.png";
import variantc from "../../Assets/Projects/variantc.png";
import covidPredictor from "../../Assets/Projects/covidPredictor.png";
import webAnniversary from "../../Assets/Projects/anniversary-web.jpg";
import restIndo from "../../Assets/Projects/restindo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaktrans}
              isBlog={false}
              title="Jaktrans - UI Design"
              description="An application that accommodates all modes of transportation in Jakarta. Later users can choose what mode of transportation they want to use."
              
              demoLink="https://www.figma.com/proto/wPdIXRlnbxauws8RcM58MG/Jaktrans?node-id=7-8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jakartaEmergency}
              isBlog={false}
              title="Jakarta Emergency - UI Design"
              description="The user interface can later help users to contact the officers concerned when they see or feel an emergency. Like calling an ambulance."
              
              demoLink="https://www.figma.com/proto/l2oPZu5TALrIPJd95fNK5w/Jakarta-Emergency?node-id=313-1354&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sciport}
              isBlog={false}
              title="Sciport - UI/UX Design"
              description="Sciport is an online learning portal whose main focus is science. Made as attractive as possible because it is devoted to student learning. There are also quizzes and tests in the application."
              
              demoLink="https://www.figma.com/proto/mkD93BZfoE9YSjOQiII0TM/Sciport?node-id=130-2468&scaling=scale-down&page-id=0%3A1&starting-point-node-id=130%3A2468&show-proto-sidebar=1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webPortofolio}
              isBlog={false}
              title="Web Portfolio - UI Design"
              description="Website portfolio in the form of a figma prototype. Where the contents of the portfolio are a collection of UI/UX designs that I made."
              
              demoLink="https://www.figma.com/proto/zUTjkEeJF76juMS75vRj9n/Website-Portofolio---Maulana-Fajar-Lazuardi?node-id=1-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IndoLoker}
              isBlog={false}
              title="IndoLoker - Web Development"
              description="IndoLoker is a website that allows users to apply for jobs, especially in the IT field. With sufficient details, one of which is the salary range, users can clearly choose what job they want."
              ghLink="https://gitlab.com/mafalaz/sanbercode-reactjs-batch-37/-/tree/main/final-project"
              demoLink="https://final-project-mafalaz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingPage}
              isBlog={false}
              title="Landing Page - Web Development"
              description="This landing page contains online bootcamps, especially in the field of technology."
              ghLink="https://github.com/mafalaz/tim-f36"
              demoLink="https://mafalaz.github.io/tim-f36/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={variantc}
              isBlog={false}
              title="Variant'C - Web Development"
              description="Variant'c is a website landing page that offers a solution for Covid-19, namely detecting positive or negative Covid-19 based on the symptoms that the user inputs, and can also detect the symptoms."
              ghLink="https://github.com/mafalaz/variant-c-home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidPredictor}
              isBlog={false}
              title="Covid Predictor - Web Development"
              description="Covid Predictor is a website that can predict positive or negative users of Covid-19 and its variants."
              ghLink="https://github.com/mafalaz/variant-c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webAnniversary}
              isBlog={false}
              title="Web Anniversary - Web Development"
              description="This website is a website for celebrating birthdays as a couple or it can also function for wedding invitations and engagements. With several features including using a pin as a form of privacy."
              
              demoLink="https://widyalazuardi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restIndo}
              isBlog={false}
              title="Katalog Restoran - Web Development"
              description="This website is a website for celebrating birthdays as a couple or it can also function for wedding invitations and engagements. With several features including using a pin as a form of privacy."
              ghLink="https://github.com/mafalaz/katalog-restoran"
              demoLink="https://restindo.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
