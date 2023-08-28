import MainService from "./MainService";
import MainHot from "./MainHot";
import MainBest from "./MainBest";
import MainNew from "./MainNew";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const Main = () => {
  const mainImg = [
    {
      id: 1,
      alt: "mainImgOne",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/e91102af-91fc-4fbc-deed-c41c84a63229.jpeg",
    },
    {
      id: 2,
      alt: "mainImgTwo",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/30c1f8ab-8057-4c3d-a5d8-1599365b50b7.jpeg",
    },
    {
      id: 3,
      alt: "mainImgThree",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/649b783e-9a09-4084-bcb3-d03b2e8e38be.jpeg",
    },
  ];
  const mediaMainImg = [
    {
      id: 1,
      alt: "mainImgOne",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/824b0006-f229-4f0b-ddf2-be63d2edc405.jpeg",
    },
    {
      id: 2,
      alt: "mainImgTwo",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/25bad0b3-4049-4ed6-a2b6-235fd7d61e49.jpeg",
    },
    {
      id: 3,
      alt: "mainImgThree",
      src: "https://file.cafe24cos.com/banner-admin-live/upload/thedaju/7497c929-e669-46d3-b2bb-4b50795ba243.jpeg",
    },
  ];

  return (
    <MainComponent>
      <MainComponentSection>
        <MainImgComponent>
          <MainSwiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 5000 }}
          >
            {mainImg.map(({ id, alt, src }) => (
              <MainImgBox key={id}>
                <MainImg alt={alt} src={src} />
              </MainImgBox>
            ))}
          </MainSwiper>
          <MediaMainSwiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 5000 }}
          >
            {mediaMainImg.map(({ id, alt, src }) => (
              <MainImgBox key={id}>
                <MainImg alt={alt} src={src} />
              </MainImgBox>
            ))}
          </MediaMainSwiper>
        </MainImgComponent>
        <MainService
          header="더다주 도매방법"
          textOne="첫 방문이신가요"
          textTwo="더다주 도매 방법을 알아보세요"
          textLink="자세히보기"
        />
        <MainHot />
        <MainBest />
        <MainService
          header="찾으시는 제품이 없나요?"
          textOne="원하시는 제품의 정보, 사진을 보내주시면"
          textTwo="최선을 다해 찾아드리겠습니다"
          textLink="더다주 카카오톡 문의하기"
        />
        <MainNew />
      </MainComponentSection>
    </MainComponent>
  );
};

const MainComponent = styled.div`
  width: 100vw;
`;

const MainComponentSection = styled.section`
  width: 100%;
`;

const MainImgComponent = styled.div`
  width: 100vw;
  margin-bottom: 8%;
  overflow-y: clip;
`;

const MainSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: black;
    width: 10px;
    height: 10px;
    margin: 0 5px !important;
  }
  ${({ theme }) => theme.media.tablet`
    display:none;
  `}
`;

const MediaMainSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: black;
    width: 10px;
    height: 10px;
    margin: 0 5px !important;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MainImgBox = styled(SwiperSlide)`
  height: 38%;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Main;
