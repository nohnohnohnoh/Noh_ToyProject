import React, { useState, useEffect } from "react";
import NavFirstList from "./NavFirstList";
import NavSecondList from "./NavSecondList";
import styled, { css } from "styled-components";

interface ScrollYProps {
  scrollY: number;
}

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <NavComponents scrollY={scrollY}>
      <NavComponentsSection>
        <NavFirstList />
        <NavSecondList />
      </NavComponentsSection>
    </NavComponents>
  );
};

const NavComponents = styled.nav<ScrollYProps>`
  width: 100vw;
  margin: 0 auto;
  position: relative;
  background: #fff;
  z-index: 998;
  border-bottom: 1px solid #e8e8e8;
  ${(props) =>
    props.scrollY! &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(-45px);
    `}
`;

const NavComponentsSection = styled.div`
  max-width: 1760px;
  width: 92%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Nav;
