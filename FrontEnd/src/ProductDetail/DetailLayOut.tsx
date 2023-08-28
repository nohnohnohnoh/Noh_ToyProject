import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface DetailProps {
  children: React.ReactNode;
  title: string;
}

const DetailLayOut = ({ children, title }: DetailProps) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <DetailLayOutComponent>
      <DetailHeader>
        <DetailText onClick={navigateHome}>홈</DetailText>
        <DetailText>/</DetailText>
        <DetailText>{title}</DetailText>
      </DetailHeader>
      <DetailLogoBox>
        <DetailLogo>상품상세 정보</DetailLogo>
      </DetailLogoBox>
      <section>{children}</section>
    </DetailLayOutComponent>
  );
};

const DetailLayOutComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

const DetailHeader = styled.div`
  ${({ theme }) => theme.flexMixIn("flex-end", "center")};
  padding: 2.5% 0 0 0;
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.media.desktop`
  display: none;
  `}
`;

const DetailLogoBox = styled.div`
  ${({ theme }) => theme.media.desktopHuge`
  display: none;
  `}
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`;

const DetailLogo = styled.h1`
  ${({ theme }) => theme.media.desktopHuge`
  display: none;
  `}
  font-size: 18px;
  font-weight: 700;
  color: rgb(26, 26, 26);
`;

const DetailText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
  cursor: pointer;
`;

export default DetailLayOut;
