import React from "react";
import styled from "styled-components";

export type Footer_Data_Type = {
  id: number;
  boldContent: string;
  content: string;
};

export const Footer_Data = [
  {
    id: 1,
    boldContent: "제작자",
    content: "노영완",
  },
  {
    id: 2,
    boldContent: "연락처",
    content: "010-5576-0563",
  },
  {
    id: 3,
    boldContent: "e-mail",
    content: "shduddhks1234@gmail.com",
  },
  {
    id: 4,
    boldContent: "GITHUB",
    content: "www.",
  },
  {
    id: 5,
    boldContent: "VELOG",
    content: "velog.",
  },
  {
    id: 6,
    boldContent: "FE",
    content: "JS REACT REDUX REACT-REDUX REDUX-TOOLKIT",
  },
  {
    id: 7,
    boldContent: "BE",
    content: "NODE MONGODB MONGOOSE",
  },
  {
    id: 8,
    boldContent: "더다주 GITHUB ",
    content: "https://github.com/nohnohnohnoh/Noh_ToyProject",
  },
  {
    id: 9,
    boldContent: "더다주 모티브 사이트",
    content: "https://thedaju.com/",
  },
  {
    id: 10,
    boldContent: "이력서 사이트",
    content: "www.123@123.com",
  },
];

const FooterContent = () => {
  return (
    <FooterMySelfContent>
      <FooterMySelfContentList>
        <FooterMySelfLogo>상세 정보</FooterMySelfLogo>
        {Footer_Data.slice(0, 5).map(
          ({ id, boldContent, content }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
      <FooterMySelfContentList>
        <FooterMySelfLogo>THE DAJU 기술 스택</FooterMySelfLogo>
        {Footer_Data.slice(5, 7).map(
          ({ id, boldContent, content }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
      <FooterMySelfContentList>
        <FooterMySelfLogo>THE DAJU 상세정보</FooterMySelfLogo>
        {Footer_Data.slice(7, 9).map(
          ({ id, boldContent, content }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
      <FooterMySelfContentList>
        <FooterMySelfLogo>이력서 상세정보</FooterMySelfLogo>
        {Footer_Data.slice(9).map(
          ({ id, boldContent, content }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
    </FooterMySelfContent>
  );
};

const FooterMySelfContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 2;
  border-bottom: 1px solid #dadada;
`;

const FooterMySelfLogo = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const FooterMySelfContentList = styled.div`
  margin: 2%;
`;

const FooterMySelfBox = styled.div`
  margin: 0 10px 0 0;
`;

const FooterMySelfBold = styled.span`
  font-weight: 700;
  color: #1a1a1a;
  line-height: 2;
`;

const FooterMySelf = styled(FooterMySelfBold)`
  font-weight: 400;
`;

export default FooterContent;
