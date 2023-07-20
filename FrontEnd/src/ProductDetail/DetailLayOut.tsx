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
`;

const DetailText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
  cursor: pointer;
`;

export default DetailLayOut;
