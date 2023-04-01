import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="proj-link" href={url}>
            view site
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
