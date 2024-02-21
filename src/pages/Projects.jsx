import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Foodcart from "../assets/projects/foodcart.png";
import Gesture from "../assets/projects/gesture.png";
import Netflix from "../assets/projects/neflix.png";
import Drum from "../assets/projects/drum.png";
import Family_Treacker from "../assets/projects/project.jpeg"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gesture}
              isBlog={false}
              title="Hand Gesture Project"
              description="it's a system where user can interact with system without mouse or keyboard it works through your finger points it collects your finger points through mediapipe and interact with system like mouse using pyautogui functions."
              ghLink="https://github.com/nayeem7866/gestureproject-pythongestureproject-python
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodcart}
              isBlog={false}
              title="E‑Commerce Web"
              description="This is a ecommerse web application for food cart where user can buy their delicious food at home  use login and can see his order history an all and on the backend shopkeeper can add items update and give discounts  also reply to user querries."
              ghLink="https://github.com/nayeem7866/project_food_cartproject_food_cart
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Musical Drum "
              description="This is a Game where children can play music by using keyboard keys and learn music and enjoy it is very intresting game with diffrent drum sounds and have good gui  ."
              ghLink="https://github.com/nayeem7866/musicaldrum"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drum}
              isBlog={false}
              title="Netflix clone ui Website"
              description="This is netflix clone ui where all the movies and series are shown on netflix page using TMDB Api and it also have user login and signup  using firebase ."
              ghLink="https://github.com/nayeem7866/netflix-ui
              "
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Family_Treacker}
              isBlog={false}
              title="Family Tracker"
              description="This is a family Tracker web app where you can add places where u have visited and add family member and where he/she has visited shown on world map we made this using node js and express"
              ghLink="https://github.com/nayeem7866/Family_Travel_Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects