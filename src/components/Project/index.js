import React from "react";
import { Card, Col } from "react-bootstrap";
import "./style.css";

export function RandomProject(props) {
  
  return (
    <Card className="randomCard">
      <a className="Link" href={props.project.url}>
        <Card.Title className="cardTitle">{props.project.title}</Card.Title>
        <Card.Img
          className="projImg"
          variant="top"
          src={props.project.image}
          rounded
          fluid
        />
        <Card.Text className="cardText">{props.project.description}</Card.Text>
      </a>
      <Card.Text>
        <a className="repoLink" href={props.project.repo}>
          See the Code Here
        </a>
      </Card.Text>
    </Card>
  );
}

export function AllProjects(props) {
  
  return (
    <Col lg={3} md={6} sm={12}>
      <a className="Link" href={props.project.url}>
        <Card className="projCard">
          <Card.Title className="cardTitle">{props.project.title}</Card.Title>
          <Card.Img
            className="projImg"
            variant="top"
            src={props.project.image}
            rounded
            fluid
          />
          <Card.Text className="cardText">
            <p>{props.project.description}</p>
            <a className="repoLink" href={props.project.repo}>
              See the Code Here
            </a>
          </Card.Text>
        </Card>
      </a>
    </Col>
  );
}




