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
  const alertPrepare = () => {
    alert("준비중에 있는 서비스 입니다.");
  };
  return (
    <ServiceComponent>
      <ServiceSection>
        <ServiceHeader>{header}</ServiceHeader>
        <ServiceText>{textOne}</ServiceText>
        <ServiceText>{textTwo}</ServiceText>
        <ServiceLink onClick={alertPrepare}>{textLink}</ServiceLink>
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
  ${({ theme }) => theme.media.desktop`
    padding: 50px 0;
  `}
  ${({ theme }) => theme.media.tablet`
    margin: 0 auto 50px;
  `}
`;

const ServiceHeader = styled.div`
  width: 96%;
  margin: 0 auto 25px;
  color: #1a1a1a;
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  ${({ theme }) => theme.media.mobile`
  font-size: 20px;
  `}
`;

const ServiceText = styled.p`
  width: 96%;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #1a1a1a;
  margin: 0 auto;
  ${({ theme }) => theme.media.mobile`
  font-size: 12px;
  `}
`;

const ServiceLink = styled.div`
  display: inline-block;
  margin-top: 30px;
  padding: 0 0 2px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  border-bottom: 1px solid #3a3a3a;
  color: #3a3a3a;
  cursor: pointer;
`;

export default MainService;
