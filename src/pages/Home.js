import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  color: #ff69b4;
`;

const Home = () => {
  return (
    <Container>
      <Title>우리 결혼해요! 💍</Title>
      <p>2026년 1월 10일, 인천</p>
    </Container>
  );
};

export default Home;
