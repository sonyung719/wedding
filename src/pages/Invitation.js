import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Invitation = () => {
  return (
    <Container>
      <h1>초대합니다 💌</h1>
      <p>2026년 1월 10일, 인천 웨스턴 팰리스</p>
      <p>신랑 손영준  & 신부 노현민</p>
    </Container>
  );
};

export default Invitation;