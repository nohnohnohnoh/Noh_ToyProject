import React from "react";
import FooterContent from "./FooterContent";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterComponents>
      <FooterSection>
        <FooterLogo>THE DAJU</FooterLogo>
        <FooterContent />
        <FooterBottom>
          <FooterBottomContent>
            학습의 목적으로 더다주 사이트를 모티브로 제작하였습니다.
          </FooterBottomContent>
        </FooterBottom>
      </FooterSection>
    </FooterComponents>
  );
};

const FooterComponents = styled.footer`
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  background: #f5f5f5;
`;

const FooterSection = styled.section`
  max-width: 1760px;
  width: 92%;
  margin: 0 auto;
  padding: 4% 0 0;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const FooterBottom = styled.div`
  padding-top: 1%;
  padding-bottom: 1.5%;
`;

const FooterBottomContent = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #a8a8a8;
  line-height: 1.6;
`;

export default Footer;
