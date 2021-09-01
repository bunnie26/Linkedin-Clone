import React from "react";
import styled from "styled-components";

function Rightside(props) {
  return (
    <Container>
      <FollowCard>Untill you come back home</FollowCard>
    </Container>
  );
}
const Container = styled.div`
  grid-area: Rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 15%), 0 0 0 rgb(0 0 0 /20%);
  padding: 12px;
`;
export default Rightside;
