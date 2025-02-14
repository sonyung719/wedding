import React from "react";
import styled from "styled-components";
import syjPhoto from "../assets/syj_temp.jpg";
import togetherPhoto from "../assets/together.jpg";


const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  color: #ff69b4;
`;

const Gallery = () => {
  return (
    <Container>
      <Title>Gallery! </Title>
          <img src={syjPhoto} alt="우리 결혼해요!" width="300px" />
          <img src={togetherPhoto} alt="우리 결혼해요!" width="300px" />
    </Container>
  );
};

export default Gallery;
