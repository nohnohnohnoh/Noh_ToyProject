import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";

interface DetailAreaImg {
  src: string | undefined;
}

const DetailAreaImg = ({
  src,
  zoomRate = 5,
  width = 350,
  height = 350,
}: any) => {
  const [cursor, setCursor] = useState({
    cursorX: 0,
    cursorY: 0,
  });

  const imageRef = useRef<any>(); // 원본 이미지
  const imageZoomRef = useRef<any>(); // 확대될 이미지
  const cursorRef = useRef<any>(); // 마우스커서 혹은 확대할곳

  const onMouseMove = useCallback(
    (
      e: {
        target: { getBoundingClientRect: () => any };
        pageX: any;
        pageY: any;
      },
      zoomRate: number
    ) => {
      // mouse가 움직일때마다 실행 될 함수
      imageZoomRef.current.style.backgroundSize = `${
        // 백그라운드 사이즈를 설정함으로써 이미ㅣ지를 확대 할 수 있다.
        imageRef.current.offsetWidth * zoomRate
      }px ${imageRef.current.offsetHeight * zoomRate}px`; // 실제이미지의 넓이와 높이 확대될 비율을 곱한다.

      const rect = e.target.getBoundingClientRect(); // 원본 이미지의 위치를 알아냅니다.

      const getCursorPos = (e: { pageX: number; pageY: number }) => {
        // 커서의 좌표를 구하는 함수
        let x = 0,
          y = 0;
        x = e.pageX - rect.left;
        y = e.pageY - rect.top; // 뷰포트기준 원본 이미지 안의 마우스의 위치 - 페이지 전체 위치에서 원본 이미지가 떨어져있는 위치값

        return { x, y };
      };

      const pos = getCursorPos(e);

      let x = pos.x - cursorRef.current.offsetWidth / 2;
      let y = pos.y - cursorRef.current.offsetHeight / 2;

      imageZoomRef.current.style.backgroundPosition = `-${x * zoomRate}px -${
        // 복사된 이미지의 어디가 확대 될 곳인지 position을 정해준다.
        y * zoomRate
      }px`;

      setCursor({
        cursorX: e.pageX,
        cursorY: e.pageY,
      });
    },
    []
  );
  return (
    <DetailImgBox>
      <DetailImg src={src} />
    </DetailImgBox>
  );
};

const DetailImgBox = styled.div`
  display: inline-block;
  width: calc(100% - 650px);
  height: 445px;
`;

const DetailImg = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  position: relative;
  max-width: 100%;
  height: 100%;
`;

export default DetailAreaImg;
