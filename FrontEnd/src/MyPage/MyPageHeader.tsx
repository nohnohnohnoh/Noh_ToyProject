import styled from "styled-components";

interface MyPageProps {
  navigateMain: () => void;
}

const MyPageHeader = ({ navigateMain }: MyPageProps) => {
  return (
    <>
      <MypageHeader>
        <MypageHeaderText onClick={navigateMain}>홈</MypageHeaderText>
        <MypageHeaderText>/</MypageHeaderText>
        <MypageHeaderBoldText>마이 쇼핑</MypageHeaderBoldText>
      </MypageHeader>
      <MypageTitle>
        <MypageTitleText>마이 쇼핑</MypageTitleText>
      </MypageTitle>
    </>
  );
};

const MypageHeader = styled.div`
  ${({ theme }) => theme.flexMixIn("flex-end", "center")};
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5% 0 0 0;
  ${({ theme }) => theme.media.desktop`
  display: none;
  `}
`;

const MypageHeaderText = styled.div`
  padding: 0.25%;
  font-size: 12px;
  color: #7d7d7d;
  cursor: pointer;
`;

const MypageHeaderBoldText = styled(MypageHeaderText)`
  font-weight: bold;
  color: #1a1a1a;
`;

const MypageTitle = styled.div`
  width: 92%;
  max-width: 1230px;
  margin: 0 auto 40px auto;
  padding: 45px 0 40px;
  text-align: center;
  ${({ theme }) => theme.media.desktop`
    margin: 0 auto;
    padding: 20px 0;
  `}
`;

const MypageTitleText = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #1a1a1a;
  ${({ theme }) => theme.media.desktop`
    font-size: 18px;
  `}
`;

export default MyPageHeader;
