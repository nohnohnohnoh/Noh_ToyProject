import React from "react";
import styled from "styled-components";

interface MainServiceProps {
  header: string;
  textOne: string;
  textTwo: string;
  textLink: string;
}

const MainService = ({
  header,
  textOne,
  textTwo,
  textLink,
}: MainServiceProps) => {
  return (
    <ServiceComponent>
      <ServiceSection>
        <ServiceHeader>{header}</ServiceHeader>
        <ServiceText>{textOne}</ServiceText>
        <ServiceText>{textTwo}</ServiceText>
        <ServiceLink>{textLink}</ServiceLink>
      </ServiceSection>
    </ServiceComponent>
  );
};

const ServiceComponent = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  width: 100%;
  margin-bottom: 8%;
`;

const ServiceSection = styled.section`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
  max-width: 1230px;
  width: 92%;
  margin: 0 auto;
  padding: 100px 0;
  text-align: center;
  background-color: #fafafa;
`;

const ServiceHeader = styled.div`
  width: 96%;
  margin: 0 auto 25px;
  color: #1a1a1a;
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
`;

const ServiceText = styled.p`
  width: 96%;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #1a1a1a;
  margin: 0 auto;
`;

const ServiceLink = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 0 0 2px 0;
  margin-top: 30px;
  border-bottom: 1px solid #3a3a3a;
  color: #3a3a3a;
`;

export default MainService;
