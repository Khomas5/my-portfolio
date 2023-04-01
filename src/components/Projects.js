import { Container, Tab, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import projImg7 from "../assets/images/project-img7.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg1,
      url: "https://khomas5.github.io/cluster/",
    },
    {
      title: "Analityco",
      description: "front-end development",
      imgUrl: projImg2,
      url: "https://khomas5.github.io/Analytico/",
    },

    {
      title: "iMedical",
      description: "front-end development",
      imgUrl: projImg3,
      url: "https://khomas5.github.io/iMedical/",
    },

    {
      title: "JS Games",
      description: "Javascript",
      imgUrl: projImg4,
      url: "https://khomas5.github.io/JS-games/",
    },
    {
      title: "Epic-Play",
      description: "Webflow",
      imgUrl: projImg7,
      url: "https://epic-play-8a0a06.webflow.io",
    },

    {
      title: "Omnifood",
      description: "front-end development",
      imgUrl: projImg5,
      url: "https://khomas5.github.io/omnifood-project/",
    },

    {
      title: "Nexter",
      description: "front-end development",
      imgUrl: projImg6,
      url: "https://khomas5.github.io/Nexter/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__flipInX" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis magna sed sapien sagittis volutpat et id sem.
                    Donec rhoncus orci sit amet pharetra faucibus. Proin id
                    tellus quis risus tempus venenatis a ac neque. In bibendum
                    urna at tortor bibendum, vitae interdum lectus tempor. Sed
                    ante purus, mattis at leo a, malesuada luctus neque. Integer
                    gravida consectetur neque, eu tristique velit pretium a.
                    Aliquam mollis congue ex vel iaculis. Sed consequat
                    facilisis mattis. Sed justo tortor, placerat et feugiat
                    finibus, auctor vel orci. Curabitur tempus augue at dapibus
                    blandit. Nullam gravida tincidunt ullamcorper. Praesent
                    scelerisque tempor tortor ut fermentum.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  Aliquam finibus felis quis egestas consequat. Fusce posuere,
                  nisl et pharetra molestie, ex libero aliquet eros, eget
                  posuere nibh felis fermentum leo. Praesent vehicula, neque nec
                  varius volutpat, metus magna dapibus nulla, at scelerisque sem
                  odio in purus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Suspendisse id massa fringilla, sodales
                  tellus vitae, lobortis turpis. Aenean auctor magna sed dolor
                  congue fringilla. Nulla vel gravida magna.
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  Aliquam finibus felis quis egestas consequat. Fusce posuere,
                  nisl et pharetra molestie, ex libero aliquet eros, eget
                  posuere nibh felis fermentum leo. Praesent vehicula, neque nec
                  varius volutpat, metus magna dapibus nulla, at scelerisque sem
                  odio in purus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Suspendisse id massa fringilla, sodales
                  tellus vitae, lobortis turpis. Aenean auctor magna sed dolor
                  congue fringilla. Nulla vel gravida magna.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

export default Projects;
