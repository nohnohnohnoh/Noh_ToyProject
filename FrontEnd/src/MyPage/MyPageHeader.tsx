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
  padding: 2.5% 0 0 0;
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const MypageHeaderText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
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
`;

const MypageTitleText = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #1a1a1a;
`;

export default MyPageHeader;
