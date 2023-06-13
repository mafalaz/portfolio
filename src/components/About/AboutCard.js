import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maulana Fajar Lazuardi </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />I am a undgraduate student of Computer Science in Esa Unggul University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build something useful for everyone!"{" "}
          </p>
          <footer className="blockquote-footer">Maulana Fajar Lazuardi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
