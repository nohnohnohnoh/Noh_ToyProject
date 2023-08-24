import { Link } from "react-router-dom";
import styled from "styled-components";

export type Footer_Data_Type = {
  id: number;
  boldContent: string;
  content: string;
  href: any;
};

export const Footer_Data = [
  {
    id: 1,
    boldContent: "제작자",
    content: "노영완",
    href: null,
  },
  {
    id: 2,
    boldContent: "연락처",
    content: "010-5576-0563",
    href: null,
  },
  {
    id: 3,
    boldContent: "e-mail",
    content: "shduddhks1234@gmail.com",
    href: null,
  },
  {
    id: 4,
    boldContent: "GITHUB",
    content: "https://github.com/nohnohnohnoh",
    href: "https://github.com/nohnohnohnoh",
  },
  {
    id: 5,
    boldContent: "VELOG",
    content: "https://velog.io/@nohnohnohnoh",
    href: "https://velog.io/@nohnohnohnoh",
  },
  {
    id: 6,
    boldContent: "FE",
    content: "JS REACT REDUX REACT-REDUX REDUX-TOOLKIT",
    href: null,
  },
  {
    id: 7,
    boldContent: "BE",
    content: "NODE MONGODB MONGOOSE",
    href: null,
  },
  {
    id: 8,
    boldContent: "더다주 GITHUB ",
    content: "https://github.com/nohnohnohnoh/ToyProject_TheDaJu",
    href: "https://github.com/nohnohnohnoh/ToyProject_TheDaJu",
  },
  {
    id: 9,
    boldContent: "더다주 모티브 사이트",
    content: "https://thedaju.com/",
    href: "https://thedaju.com/",
  },
  {
    id: 10,
    boldContent: "더다주 관련 velog",
    content:
      "https://velog.io/@nohnohnohnoh/series/ToyProject%EB%8D%94%EB%8B%A4%EC%A3%BC",
    href: "https://velog.io/@nohnohnohnoh/series/ToyProject%EB%8D%94%EB%8B%A4%EC%A3%BC",
  },
];

const FooterContent = () => {
  return (
    <FooterMySelfContent>
      <FooterMySelfContentList>
        <FooterMySelfLogo>상세 정보</FooterMySelfLogo>
        {Footer_Data.slice(0, 5).map(
          ({ id, boldContent, content, href }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf to={href}> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
      <FooterMySelfContentList>
        <FooterMySelfLogo>THE DAJU 기술 스택</FooterMySelfLogo>
        {Footer_Data.slice(5, 7).map(
          ({ id, boldContent, content, href }: Footer_Data_Type) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf to={href}> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )}
      </FooterMySelfContentList>
      <FooterMySelfContentList>
        {/* <FooterMySelfLogo>THE DAJU 상세정보</FooterMySelfLogo> */}
        {/* {Footer_Data.slice(7, 10).map(
          ({ id, boldContent, content, href }: any) => {
            return (
              <FooterMySelfBox key={id}>
                <FooterMySelfBold>{boldContent} </FooterMySelfBold>
                <FooterMySelf to={href}> {content}</FooterMySelf>
              </FooterMySelfBox>
            );
          }
        )} */}
      </FooterMySelfContentList>
    </FooterMySelfContent>
  );
};

const FooterMySelfContent = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between", "")};
  font-size: 12px;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 2;
  border-bottom: 1px solid #dadada;
  ${({ theme }) => theme.media.desktop`
    font-size: 10px;
  `}
`;

const FooterMySelfLogo = styled.div`
  font-size: 16px;
  font-weight: bold;
  ${({ theme }) => theme.media.desktop`
    font-size: 14px;
  `}
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

const FooterMySelf = styled(Link)`
  font-weight: 400;
  color: #1a1a1a;
  line-height: 2;
  text-decoration-line: none;
`;

export default FooterContent;
