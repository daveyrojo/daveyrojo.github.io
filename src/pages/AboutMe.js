import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Resume from "../components/Resume";

function AboutMe () {

    return (
      <Container fluid>
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: ".5rem",
          }}
        >
          <h3>A Little About Me:</h3>
        </div>
        <Row>
          <Col lg={5}>
            <Image
              variant="top"
              src={"https://i.imgur.com/vYNZiEz.jpg"}
              style={{ alignItems: "center", width: "100%" }}
              rounded
              fluid
            />
            <h3 style={{ paddingTop: ".5rem", paddingLeft: "8rem" }}>
              My strengths in life:
            </h3>
            <ul style={{ paddingLeft: "10.9rem", fontSize: "large" }}>
              <li style={{ padding: ".75rem" }}>Willingness to learn</li>
              <li style={{ padding: ".75rem" }}>Willingness to learn</li>
              <li style={{ padding: ".75rem" }}>Determined</li>
              <li style={{ padding: ".75rem" }}>Resilient</li>
              <li style={{ padding: ".75rem" }}>Loving</li>
              <li style={{ padding: ".75rem" }}>Fun</li>
            </ul>
          </Col>
          <Col lg={5}>
            <p style={{ fontSize: "16px" }}>
              Well for starters my name, clearly, is David Eldridge! I have 12
              years of management experience - close to half my life! - and I am
              so excited to bring those soft skills to the tech world. After
              graduating college (with a triple major) I had wanted to get into
              coding but an upside down economy and a need to alleviate my
              student loan debt I abstained for several years. During that time
              I had a 6 year career with Enterprise Rent-A-Car working my way
              from Management Trainee to District Manager. After stepping away
              to focus on my family and find what I really wanted to do with my
              life I looked into a large array of career choices. From being an
              insurance agent, to a call center manager, to the medical field
              nothing scratched the itch I had. That itch was to be challenged
              everyday and work in a logical yet creative field. I started to
              teach myself coding and quickly realized this is what I wanted to
              do. With a wide array of specialties to companies and market
              sectors it was specific enough to know what my next step would be
              but also broad enough to feel like I wasn't going to get trapped
              in something overly specific too early. I did a lot of research in
              different programs and found the Rutgers program to strike the
              right balance of price, career services, and time. I am extremely
              proud, excited and motivated to ace the Rutgers Boot Camp program
              and help as many fellow students as possible. If you've made it
              this far thank you for your time and I hope to be working with you
              in the future! I have been a huge soccer fan for my entire life
              but I also played at a very high level. The passion for working as
              a team to accomplish a goal is something I've always relished. If
              given the opportunity to work for you I'll bring the same team
              spirit and the same competetive edge! I became a father this last
              October (2020) but I didn't let that distract me from my career
              goals. I have gone through my Rutgers FS Coding Bootcamp while
              being a new dad - while my wife works fulltime! I am an extremely
              lucky guy for having the amazing ladies in my life, but I'm a firm
              believer that you make your own luck through hardwork and staying
              focused. That's what you can expect out of me if we work together
              in the future!
            </p>
          </Col>
          <Col lg={2}>
            <Image
              variant="top"
              src={"https://i.imgur.com/2dxLX1V.jpg"}
              style={{
                alignItems: "center",
                width: "auto",
              }}
              rounded
              fluid
            />
            <Resume />
          </Col>
        </Row>
      </Container>
    );
  }

export default AboutMe;
