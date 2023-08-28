import { useState, useEffect } from "react";
import NavFirstList from "./NavFirstList";
import NavSecondList from "./NavSecondList";
import styled, { css } from "styled-components";
import Aside from "../Aside/Aside";

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
  position: relative;
  z-index: 998;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  ${(props) =>
    props.scrollY! &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(-50px);
    `}
  ${({ theme }) => theme.media.desktop`
  ${(props: { scrollY: any }) =>
    props.scrollY! &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(0px);
    `}
    `}
`;

const NavComponentsSection = styled.div`
  ${({ theme }) => theme.flexMixIn("", "center")};
  display: flex;
  max-width: 1760px;
  width: 92%;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
`;

export default Nav;
