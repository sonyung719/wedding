import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";
import Gallery from "./pages/Gallery";
import Map from "./components/Map";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.bg || "#fff"};
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 192, 203, 0.9);
  padding: 10px;
  text-align: center;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

function App() {
  return (
    <Container>
      {/* 네비게이션 바 */}
      <Navbar>
        <StyledLink to="home" smooth={true} duration={500}>홈</StyledLink>
        <StyledLink to="invitation" smooth={true} duration={500}>초대장</StyledLink>
        <StyledLink to="gallery" smooth={true} duration={500}>갤러리</StyledLink>
        <StyledLink to="location" smooth={true} duration={500}>위치</StyledLink>
      </Navbar>

      {/* 각 섹션 */}
      <Section id="home" bg="#ffeff5">
        <Home />
      </Section>

      <Section id="invitation" bg="#ffe4e1">
        <Invitation />
      </Section>
      
      <Section id="gallery" bg="#ffdab9">
        <Gallery />
      </Section>

      <Section id="location" bg="#f0f8ff">
        <h2>오시는 길</h2>
        <Map />
      </Section>

    </Container>
  );
}

export default App;
