import styled from "styled-components";
import Content from "./Content";
import Comment from "./Comment";
import QnA from "./QnA";
import Change from "./Change";
import { useEffect, useState } from "react";

interface DetailContentProps {
  src: string | undefined;
}

const DetailContentLayOut = ({ src }: DetailContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const liMenu = [
    { id: 0, title: "상세정보", content: <Content src={src} /> },
    { id: 1, title: "상품후기", content: <Comment /> },
    { id: 2, title: "상품문의", content: <QnA /> },
    { id: 3, title: " 상품문의", content: <Change /> },
  ];

  return (
    <ContentLayOutComponent>
      <section>
        <ContentTabBox>
          <ContentTab>
            {currentIndex === 0 ? (
              <ContentActiveLi>상세정보</ContentActiveLi>
            ) : (
              <ContentTabLi onClick={() => setCurrentIndex(0)}>
                상세정보
              </ContentTabLi>
            )}

            {currentIndex === 1 ? (
              <ContentActiveLi>상품후기</ContentActiveLi>
            ) : (
              <ContentTabLi onClick={() => setCurrentIndex(1)}>
                상품후기
              </ContentTabLi>
            )}
            {currentIndex === 2 ? (
              <ContentActiveLi>상품문의</ContentActiveLi>
            ) : (
              <ContentTabLi onClick={() => setCurrentIndex(2)}>
                상품문의
              </ContentTabLi>
            )}
            {currentIndex === 3 ? (
              <ContentActiveLi>구매안내</ContentActiveLi>
            ) : (
              <ContentTabLi onClick={() => setCurrentIndex(3)}>
                구매안내
              </ContentTabLi>
            )}
          </ContentTab>
        </ContentTabBox>

        {liMenu
          .filter((current) => currentIndex === current.id)
          .map((current) => {
            return <div key={current.id}>{current.content}</div>;
          })}
      </section>
    </ContentLayOutComponent>
  );
};

const ContentLayOutComponent = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 0 auto 120px auto;
`;

const ContentTabBox = styled.div`
  display: block;
  height: 64px;
  margin: 0 auto 40px;
`;

const ContentTab = styled.ul`
  clear: both;
`;

const ContentTabLi = styled.li`
  display: inline-block;
  width: 25%;
  vertical-align: top;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #111;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  height: 60px;
  color: #9a9a9a;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
`;

const ContentActiveLi = styled(ContentTabLi)`
  color: #1a1a1a;
  background-color: #fff;
  border: 1px solid #1a1a1a;
  border-bottom: 0;
`;

export default DetailContentLayOut;
