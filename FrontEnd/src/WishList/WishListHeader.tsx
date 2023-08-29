import styled from "styled-components";

interface WishListProps {
  navigateMain: () => void;
}

const WishListHeader = ({ navigateMain }: WishListProps) => {
  return (
    <>
      <WishListHeaderComponent>
        <WishListHeaderText onClick={navigateMain}>홈</WishListHeaderText>
        <WishListHeaderText>/</WishListHeaderText>
        <WishListHeaderBoldText>나의 위시리스트</WishListHeaderBoldText>
      </WishListHeaderComponent>
    </>
  );
};

const WishListHeaderComponent = styled.div`
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

const WishListHeaderText = styled.div`
  padding: 0.25%;
  font-size: 12px;
  color: #7d7d7d;
  cursor: pointer;
`;

const WishListHeaderBoldText = styled(WishListHeaderText)`
  font-weight: bold;
  color: #1a1a1a;
`;
export default WishListHeader;
