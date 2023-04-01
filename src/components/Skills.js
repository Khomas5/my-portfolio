import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.png";
import meter2 from "../assets/images/meter2.png";
import meter3 from "../assets/images/meter3.png";
import meter4 from "../assets/images/meter4.png";
import meter5 from "../assets/images/meter5.png";
import meter6 from "../assets/images/meter6.png";
import meter7 from "../assets/images/meter7.png";
import colorSharp from "../assets/images/color-sharp.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="img" />
                        <h5>HTML5</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="img" />
                        <h5>CSS5</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="img" />
                        <h5>Javascript</h5>
                      </div>
                      <div className="item">
                        <img src={meter4} alt="img" />
                        <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                        <img src={meter5} alt="img" />
                        <h5>React</h5>
                      </div>
                      <div className="item">
                        <img src={meter7} alt="img" />
                        <h5>Webflow</h5>
                      </div>
                      <div className="item">
                        <img src={meter6} alt="img" />
                        <h5>GitHub</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-left"
      />
    </section>
  );
};

export default Skills;
