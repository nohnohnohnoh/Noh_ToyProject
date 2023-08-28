import styled from "styled-components";

const MainHot = () => {
  const dataTest = [
    {
      id: 1,
      src: "https://thedaju.com/web/upload/ezst/image/ez-image-contents-07wjwas-1-0fxy2jq-29.jpg?v=1666593175086",
      text: "레트로 밀크",
    },
    {
      id: 2,
      src: "https://thedaju.com/web/upload/ezst/image/ez-image-contents-07wjwas-1-0lwzdv8-29.jpg?v=1672969668109",
      text: "레트로 밀크",
    },
    {
      id: 3,
      src: "https://thedaju.com/web/upload/ezst/image/ez-image-contents-07wjwas-1-111nfn2-29.jpg?v=1666593283066",
      text: "레트로 밀크",
    },
  ];

  return (
    <MainHotComponent>
      <MainHotSection>
        <MainHotHeaderBox>
          <MainHotLogo>ON STORE!</MainHotLogo>
          <MainHotText>요즘 가장 핫한 상품 온스토어</MainHotText>
        </MainHotHeaderBox>
        <MainHotContentBox>
          {dataTest.map(({ id, src, text }) => {
            return (
              <MainHotContent key={id}>
                <MainHotImg src={src} />
                <MainHotContentTexTBox>
                  <MainHotContentTextOne>{text}</MainHotContentTextOne>
                  <MainHotContentTextTwo>
                    자세히보기 살펴보기
                  </MainHotContentTextTwo>
                </MainHotContentTexTBox>
              </MainHotContent>
            );
          })}
        </MainHotContentBox>
      </MainHotSection>
    </MainHotComponent>
  );
};

const MainHotComponent = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  width: 100%;
  margin-bottom: 8%;
`;

const MainHotSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const MainHotHeaderBox = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const MainHotLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
`;

const MainHotText = styled.div`
  font-weight: 400;
  line-height: 1;
  color: #9a9a9a;
  margin-top: 15px;
`;

const MainHotContentBox = styled.ul`
  ${({ theme }) => theme.flexMixIn("flex-start")}
  margin: 0 -10px;
  ${({ theme }) => theme.media.desktop`
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;
    flex-direction: row;
    justify-content: flex-start !important;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  `}
`;

const MainHotContent = styled.li`
  max-width: 416px;
  margin: 0 0 30px;
  box-sizing: border-box;
  padding: 0 10px;
  ${({ theme }) => theme.media.desktop`
  scroll-snap-align: center;
    margin: 0;
    max-width: 100%;
    width: 88%;
    flex: none;
`}
`;

const MainHotImg = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
  ${({ theme }) => theme.media.desktop`
  width: 100%;
`}
`;

const MainHotContentTexTBox = styled.div`
  width: 100%;
  min-height: 33px;
  margin-top: 15px;
  background: url(https://thedaju.com/SkinImg/img/banner_arrow.svg) no-repeat
    99% center;
  background-size: 33px;
  text-align: left;
`;

const MainHotContentTextOne = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: #3a3a3a;
`;

const MainHotContentTextTwo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: #9a9a9a;
  margin-top: 15px;
`;

export default MainHot;
