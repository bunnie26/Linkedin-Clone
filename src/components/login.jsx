import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg"></img>
        </a>
        <div>
          <Join>Join Now</Join>
        </div>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
`;

export default Login;
