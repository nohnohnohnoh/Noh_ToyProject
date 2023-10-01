import styled, { keyframes } from "styled-components";

const SkeletonComponent = () => {
  const SkeletonArray = [1, 2, 3, 4];
  return (
    <>
      {SkeletonArray.map((num) => {
        return (
          <SkeletonListBox key={num}>
            <SkeletonImgBox />
            <SkeletonName />
            <SkeletonPrice />
          </SkeletonListBox>
        );
      })}
    </>
  );
};

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const SkeletonListBox = styled.div`
  display: inline-block;
  width: 22.5%;
  margin: 0 10px 60px 10px;
  @media screen and (max-width: 1100px) {
    width: 22.5%;
  }
  ${({ theme }) => theme.media.desktop`
    width: 30.5%;
    margin: 0 10px 25px 10px;
  `}
  @media screen and (max-width: 932px) {
    width: 30%;
  }
  ${({ theme }) => theme.media.tablet`
    width: 45.5%;
  `}
  @media screen and (max-width: 725px) {
    width: 45%;
  }
  @media screen and (max-width: 620px) {
    width: 44.5%;
  }
  @media screen and (max-width: 589px) {
    width: 45%;
  }
  @media screen and (max-width: 482px) {
    width: 44.5%;
  }
  @media screen and (max-width: 435px) {
    width: 44%;
  }
  @media screen and (max-width: 395px) {
    width: 43.5%;
  }
  @media screen and (max-width: 362px) {
    width: 43%;
  }
  @media screen and (max-width: 334px) {
    width: 42.5%;
  }
  ${({ theme }) => theme.media.mobile`
    width: 42%;
  `}
  @media screen and (max-width: 289px) {
    width: 40.5%;
  }
`;

const SkeletonImgBox = styled.div`
  width: 100%;
  height: 260px;
  background-color: #f2f2f2;
  border-radius: 25px;
  animation: ${skeletonGradient} 1.5s infinite ease-in-out;
  @media screen and (max-width: 1100px) {
    height: 210px;
  }
  ${({ theme }) => theme.media.desktop`
  height: 248px;
  `}
  @media screen and (max-width: 900px) {
    height: 210px;
  }
  ${({ theme }) => theme.media.tablet`
  height: 299px;
  `}
  @media screen and (max-width: 700px) {
    height: 270px;
  }
  @media screen and (max-width: 600px) {
    height: 220px;
  }
  @media screen and (max-width: 540px) {
    height: 205px;
  }
  @media screen and (max-width: 470px) {
    height: 175px;
  }
  @media screen and (max-width: 400px) {
    height: 148px;
  }
  @media screen and (max-width: 330px) {
    height: 118px;
  }
  ${({ theme }) => theme.media.mobile`
  height: 100px;
  `}
`;

const SkeletonName = styled.div`
  width: 40%;
  height: 20px;
  margin-top: 5px;
  background-color: #f2f2f2;
  border-radius: 25px;
  animation: ${skeletonGradient} 1.5s infinite ease-in-out;
`;

const SkeletonPrice = styled.div`
  width: 30%;
  height: 20px;
  margin-top: 5px;
  background-color: #f2f2f2;
  border-radius: 25px;
  animation: ${skeletonGradient} 1.5s infinite ease-in-out;
`;

export default SkeletonComponent;
