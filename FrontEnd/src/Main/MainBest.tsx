import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styled from "styled-components";

const MainBest = () => {
  const testImg = [
    {
      id: 1,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test1",
      price: "2000",
    },
    {
      id: 2,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test2",
      price: "2000",
    },
    {
      id: 3,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test3",
      price: "2000",
    },
    {
      id: 4,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test4",
      price: "2000",
    },
    {
      id: 5,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test5",
      price: "2000",
    },
    {
      id: 6,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test6",
      price: "2000",
    },
    {
      id: 7,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test7",
      price: "2000",
    },
    {
      id: 8,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test8",
      price: "3000",
    },
    {
      id: 9,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test9",
      price: "3000",
    },
    {
      id: 10,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test10",
      price: "3000",
    },
    {
      id: 11,
      src: "https://thedaju.com/web/product/medium/202105/ea34f7205ee27c7c555fe3736c2ce928.jpg",
      title: "test11",
      price: "4000",
    },
  ];

  return (
    <MainBestComponent>
      <MainBestSection>
        <MainBestHeaderBox>
          <MainBestHeaderTextOne>BEST! SELLER</MainBestHeaderTextOne>
          <MainBestHeaderTextTwo>
            더다주의 베스트샐러 제품을 만나보세요.
          </MainBestHeaderTextTwo>
        </MainBestHeaderBox>
        <MainBestContentBox>
          <SwiperPrev className="swiper-button-prev" />
          <MainBestSwiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000 }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              250: {
                spaceBetween: -10,
                slidesPerView: 1,
              },
              300: {
                spaceBetween: -40,
                slidesPerView: 1,
              },
              350: {
                spaceBetween: -80,
                slidesPerView: 1,
              },
              400: {
                spaceBetween: 120,
                slidesPerView: 2,
              },
              450: {
                spaceBetween: 120,
                slidesPerView: 2,
              },
              500: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              550: {
                spaceBetween: -30,
                slidesPerView: 2,
              },
              600: {
                spaceBetween: -70,
                slidesPerView: 2,
              },
              650: {
                spaceBetween: -120,
                slidesPerView: 2,
              },
              700: {
                spaceBetween: 80,
                slidesPerView: 3,
              },
              800: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              850: {
                spaceBetween: -30,
                slidesPerView: 3,
              },
              900: {
                spaceBetween: 150,
                slidesPerView: 4,
              },
              1000: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
              1100: {
                spaceBetween: -30,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 80,
                slidesPerView: 5,
              },
            }}
          >
            {testImg.map(({ id, src, title, price }) => {
              return (
                <MainBestSwiperSlide key={id}>
                  <MainBestContent>
                    <MainBestImg src={src} />
                    <MainBestContentTextBox>
                      <MainBestContentTitle>{title}</MainBestContentTitle>
                      <MainBestContentPrice>{price}</MainBestContentPrice>
                    </MainBestContentTextBox>
                  </MainBestContent>
                </MainBestSwiperSlide>
              );
            })}
          </MainBestSwiper>
          <SwiperNext className="swiper-button-next" />
        </MainBestContentBox>
      </MainBestSection>
    </MainBestComponent>
  );
};

const MainBestComponent = styled.div`
  width: 100vw;
  margin-bottom: 8%;
`;

const MainBestSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const MainBestHeaderBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const MainBestHeaderTextOne = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
`;

const MainBestHeaderTextTwo = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #9a9a9a;
  margin-top: 15px;
`;

const MainBestContentBox = styled.div`
  position: relative;
`;

const MainBestSwiper = styled(Swiper)`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
  .swiper-button-disabled {
  }
`;

const SwiperPrev = styled.div`
  ${({ theme }) => theme.positionMixIn("absolute", 35)};
  left: -23px;
  z-index: 2;
  width: 43px;
  height: 43px;
  background: url(https://thedaju.com/SkinImg/img/slide_ar_l.svg) no-repeat
    center;
  background-size: 43px;
  cursor: pointer;
  ::after {
    display: none;
  }
  @media screen and (max-width: 551px) {
    background-size: 35px;
  }
  @media screen and (max-width: 400px) {
    background-size: 25px;
  }
`;

const SwiperNext = styled.div`
  ${({ theme }) => theme.positionMixIn("absolute", 35)};
  right: -23px;
  z-index: 2;
  width: 43px;
  height: 43px;
  background: url(https://thedaju.com/SkinImg/img/slide_ar_r.svg) no-repeat
    center;
  background-size: 43px;
  cursor: pointer;
  ::after {
    display: none;
  }
  @media screen and (max-width: 551px) {
    background-size: 35px;
  }
  @media screen and (max-width: 400px) {
    background-size: 25px;
  }
`;

const MainBestSwiperSlide = styled(SwiperSlide)``;

const MainBestContent = styled.div`
  width: 230px;
  vertical-align: top;
  overflow: hidden;
  margin: 0;
`;

const MainBestImg = styled.img`
  width: 100%;
`;

const MainBestContentTextBox = styled.div`
  margin-top: 15px;
`;

const MainBestContentTitle = styled.div`
  text-align: left;
  font-size: 12px;
  color: #555555;
`;

const MainBestContentPrice = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;
export default MainBest;
