import React from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import { AboutMeCard } from "../components/AboutMeCard";
import Resume from "../components/Resume";
import Images from "../images.json";
import Projects from "../projects.json";

function AboutMe () {

    return (
      <Container fluid>
        <div style={{ textAlign: "center" }}>
          <h3>A Little About Me:</h3>
        </div>
        <Row>
          <Col lg={5}>
            <Image
              variant="top"
              src={"https://i.imgur.com/vYNZiEz.jpg"}
              style={{ alignItems: "center", width: "100%" }}
              fluid
            />
          </Col>
          <Col lg={5}>
            <p style={{ fontSize: "16px" }}>
              I have been a huge soccer fan for my entire life but I also played
              at a very high level. The passion for working as a team to
              accomplish a goal is something I've always relished. If given the
              opportunity to work for you I'll bring the same team spirit and
              the same competetive edge!
            </p>
          </Col>
          <Col lg={2}>
            <Resume />
          </Col>
        </Row>
        <Row>
          <Col lg={5}>

          </Col>
          <Col lg={5}>
            <p style={{ fontSize: "16px" }}>
              I have been a huge soccer fan for my entire life but I also played
              at a very high level. The passion for working as a team to
              accomplish a goal is something I've always relished. If given the
              opportunity to work for you I'll bring the same team spirit and
              the same competetive edge!
            </p>
          </Col>
          <Col lg={2}>
            <Image
              variant="top"
              src={"https://i.imgur.com/2dxLX1V.jpg"}
              style={{
                alignItems: "center",
                width: "auto",
                marginTop: ".1rem",
              }}
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
  }

export default AboutMe;
