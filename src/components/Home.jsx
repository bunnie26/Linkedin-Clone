import React from "react";
import styled from "styled-components";

function Home(props) {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </h5>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 53px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Home;
