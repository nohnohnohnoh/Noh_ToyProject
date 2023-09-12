import AsideHeaderUser from "./AsideHeaderUser";
import AsideNav from "./AsideNav";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setToggleAside } from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import styled, { css } from "styled-components";

const Aside = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const toggleAside = useSelector(
    ({ product }: RootState) => product.toggleAside
  );

  const offToggleAside = () => {
    dispatch(setToggleAside({ toggleAside: false }));
  };

  return (
    <>
      <BackGround visible={toggleAside} />
      <AsideComponent visible={toggleAside}>
        <AsideHeader>
          <AsideHeaderLogo onClick={navigateHome}>THE DAJU</AsideHeaderLogo>
          <AsideHeaderUser />
        </AsideHeader>
        <AsideNav />
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
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

const AsideClose = styled(AiOutlineClose)`
  position: absolute;
  top: 12px;
  right: 22px;
  font-size: 30px;
  ${({ theme }) => theme.media.desktop`
  position: absolute;
  top: 5px;
  right: 12px;
  `}
  ${({ theme }) => theme.media.tablet`
  position: absolute;
  top: 5px;
  right: 5px;
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
