import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { BsCurrencyDollar, BsPercent } from "react-icons/bs";
import { myOrderProductType } from "../types/type";
import styled, { css } from "styled-components";
import { BiCube } from "react-icons/bi";

interface MyPageUserProps {
  orderProduct: myOrderProductType[];
}

const MyPageUser = ({ orderProduct }: MyPageUserProps) => {
  const nickName = useSelector(
    ({ auth }: RootState) => auth.authData?.data.nickName
  );
  const [member, setMember] = useState(" 일반회원 ");
  const [totalArr, setTotalArr] = useState<number[]>([]);
  let totalPrice = 0;

  useEffect(() => {
    if (orderProduct.length === totalArr.length) return;
    orderProduct.map(({ price, quantity }) => {
      return totalArr.push(price * quantity);
    });
  }, [orderProduct]);

  const totalPriceFunction = () => {
    for (let i = 0; i < totalArr.length; i++) {
      totalPrice += totalArr[i];
    }
    return totalPrice;
  };

  totalPriceFunction();

  useEffect(() => {
    if (totalPrice > 500000 || orderProduct.length > 15) {
      setMember(" VIP회원 ");
    } else if (totalPrice > 300000 || orderProduct.length > 10) {
      setMember(" 골드회원 ");
    } else if (totalPrice > 200000 || orderProduct.length > 8) {
      setMember(" 실버회원 ");
    } else return setMember(" 일반회원 ");
  }, [totalPrice, orderProduct.length]);

  return (
    <MypageUser>
      <MypageUserBox>
        <MypageUserList>
          <MypageUserListLi>
            <User>
              <UserIcon>
                <UserIconImg
                  src={
                    "https://img.echosting.cafe24.com/skin/base_ko_KR/member/img_member_default.gif"
                  }
                />
              </UserIcon>
            </User>
            <UserInfo>
              <UserTextHeader>안녕하세요 {nickName} 님!</UserTextHeader>
              <UserTextContent>
                고객님의 회원등급은
                <span
                  style={
                    member === " 일반회원 "
                      ? { color: "#6a6a6a" }
                      : member === " 실버회원 "
                      ? { color: "sliver" }
                      : member === " 골드회원 "
                      ? { color: "#d0df61" }
                      : member === " VIP회원 "
                      ? { color: "#f05650" }
                      : undefined
                  }
                  className="member"
                >
                  {member}
                </span>
                입니다.
              </UserTextContent>
            </UserInfo>
          </MypageUserListLi>
          <MypageUserListLiFlex>
            <DollarIcon />
            <Text>총</Text>
          </MypageUserListLiFlex>
          <MypageUserListLiFlex>
            <CouponIcon />
            <BoldText>0개</BoldText>
            <Text>쿠폰</Text>
          </MypageUserListLiFlex>
          <MypageUserListLiFlex>
            <CubeIcon />
            <BoldText>
              {totalPrice}원({orderProduct.length}회)
            </BoldText>
            <Text>총주문</Text>
          </MypageUserListLiFlex>
        </MypageUserList>
      </MypageUserBox>
    </MypageUser>
  );
};

const MypageUser = styled.div`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7%;
`;

const MypageUserBox = styled.div`
  border: 1px solid #e3e3e3;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MypageUserList = styled.ul`
  ${({ theme }) => theme.flexMixIn("space-around", "")};
  flex-wrap: wrap;
`;

const MypageUserListLi = styled.li`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  padding: 50px 0;
  flex: 2;
`;

const User = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "")};
`;

const UserIcon = styled.div`
  text-align: center;
`;

const UserIconImg = styled.img`
  width: 60px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "")};
  flex-direction: column;
  margin-left: 16px;
  text-align: left;
`;

const UserTextHeader = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
`;

const UserTextContent = styled.span`
  padding-top: 6px;
  font-size: 14px;
  color: #6a6a6a;
  white-space: nowrap;
  .member {
    font-weight: bold;
  }
`;

const MypageUserListLiFlex = styled(MypageUserListLi)`
  flex: 1;
  flex-direction: column;
  border-left: 1px solid #e3e3e3;
`;

const DollarIcon = styled(BsCurrencyDollar)`
  width: 32px;
  height: 32px;
  margin: 0 auto;
`;

const CouponIcon = styled(BsPercent)`
  width: 32px;
  height: 32px;
  margin: 0 auto;
`;

const CubeIcon = styled(BiCube)`
  width: 32px;
  height: 32px;
  margin: 0 auto;
`;

const BoldText = styled.span`
  margin: 4% 0 0;
  font-size: 14px;
  font-weight: bold;
  color: #1a1a1a;
  text-align: center;
`;

const Text = styled.span`
  margin: 4% 0 0;
  font-size: 13px;
  color: #6d6d6d;
`;

export default MyPageUser;
