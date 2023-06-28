import styled from "styled-components";
import Content from "./Content";
import Comment from "./Comment";
import QnA from "./QnA";
import Change from "./Change";
import { useState } from "react";

const DetailContentLayOut = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const liMenu = [
    { title: "상세정보", content: <Content /> },
    { title: "상품후기", content: <Comment /> },
    { title: "상품문의", content: <QnA /> },
    { title: "배송/교환/환불 안내", content: <Change /> },
  ];
  return (
    <ContentLayOutComponent>
      <ContentSection>
        <ContentTabBox>
          <ContentTab>
            {liMenu.map((current, index) => (
              <ContentTabLi key={index}>{current.title}</ContentTabLi>
            ))}
          </ContentTab>
        </ContentTabBox>
        <div>{liMenu[currentIndex].content}</div>
      </ContentSection>
    </ContentLayOutComponent>
  );
};

const ContentLayOutComponent = styled.div``;

const ContentSection = styled.section``;

const ContentTabBox = styled.div``;

const ContentTab = styled.ul``;

const ContentTabLi = styled.li``;

export default DetailContentLayOut;
