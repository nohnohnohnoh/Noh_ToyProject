import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";

interface DetailAreaImg {
  src: string | undefined;
}

const DetailAreaImg = ({ src }: any) => {
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
