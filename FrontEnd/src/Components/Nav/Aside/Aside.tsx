import AsideNav from "./AsideNav";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

interface AsideProps {
  toggleAside: boolean;
  setToggleAside: (B: boolean) => void;
}

const Aside = ({ toggleAside, setToggleAside }: AsideProps) => {
  const navigate = useNavigate();

  const offToggleAside = () => {
    setToggleAside(false);
  };

  const navigateHome = () => {
    navigate("/");
    setToggleAside(false);
  };

  const navigateLogin = () => {
    navigate("/login");
    setToggleAside(false);
  };

  const navigateCreate = () => {
    navigate("/create");
    setToggleAside(false);
  };

  const navigatePreparing = () => {
    alert("준비 중에 있는 서비스 입니다.");
  };

  return (
    <>
      <BackGround visible={toggleAside} />
      <AsideComponent visible={toggleAside}>
        <AsideHeader>
          <AsideHeaderLogo onClick={navigateHome}>THE DAJU</AsideHeaderLogo>
          <AsideHeaderUser>
            <AsideHeaderUserText onClick={navigateCreate}>
              회원가입
            </AsideHeaderUserText>
            <AsideHeaderUserText onClick={navigateLogin}>
              로그인
            </AsideHeaderUserText>
            <AsideHeaderUserText onClick={navigatePreparing}>
              주문조회
            </AsideHeaderUserText>
            <AsideHeaderUserText onClick={navigatePreparing}>
              최근본상품
            </AsideHeaderUserText>
          </AsideHeaderUser>
        </AsideHeader>
        <AsideNav setToggleAside={setToggleAside} />
        <AsideClose onClick={offToggleAside} />
      </AsideComponent>
    </>
  );
};

const AsideComponent = styled.div<{ visible: boolean }>`
  z-index: 1001;
  visibility: hidden;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: -80%;
  overflow: auto;
  overflow-x: hidden;
  width: 80%;
  background-color: #fff;
  transition: 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({ theme }) => theme.media.tablet`
    position: fixed;
    top: 0px;
    bottom: 0;
    left: -100%;
    width:100%;
    ${(props: { visible: any }) =>
      props.visible &&
      css`
        visibility: visible;
        left: 0;
      `}
  `}
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      left: 0;
    `}
  ${({ theme }) => theme.media.desktopHuge`
    display:none;
  `}
`;

const AsideHeader = styled.div`
  padding: 45px 0 23px 0;
  background-color: #f5f5f5;
  text-align: center;
  margin: 0 auto;
`;

const AsideHeaderLogo = styled.h1`
  font-size: 29px;
  font-weight: bold;
  cursor: pointer;
`;

const AsideHeaderUser = styled.div`
  margin: 23px auto 0;
  ${({ theme }) => theme.flexMixIn("center", "wrap")}
`;

const AsideHeaderUserText = styled.div`
  font-size: 13px;
  line-height: 1;
  color: #1a1a1a;
  ${({ theme }) => theme.flexMixIn("", "center")}
  white-space: nowrap;
  padding: 0 5px 5px 5px;
  cursor: pointer;
`;

const AsideClose = styled(AiOutlineClose)`
  position: absolute;
  top: 12px;
  right: 22px;
  font-size: 35px;
  ${({ theme }) => theme.media.tablet`
  position: absolute;
  top: 5px;
  right: 12px;
  `}
  ${({ theme }) => theme.media.mobile`
  font-size: 30px;
  `}
`;

const BackGround = styled.div<{ visible: boolean }>`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export default Aside;
