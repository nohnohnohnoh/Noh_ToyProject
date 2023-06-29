import styled from "styled-components";

interface DetailContentProps {
  src: string | undefined;
}

const Content = ({ src }: DetailContentProps) => {
  return (
    <ContentComponents>
      <ContentImgBox>
        <ContentImg src={src} />
      </ContentImgBox>
      <ContentImgBox>
        <ContentImg src={src} />
      </ContentImgBox>
      <ContentImgBox>
        <ContentImg src={src} />
      </ContentImgBox>
      <ContentImgBox>
        <ContentImg src={src} />
      </ContentImgBox>
      <ContentImgBox>
        <ContentImg src={src} />
      </ContentImgBox>
    </ContentComponents>
  );
};

const ContentComponents = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ContentImgBox = styled.div`
  margin: 0 0 20% 0;
`;

const ContentImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export default Content;
