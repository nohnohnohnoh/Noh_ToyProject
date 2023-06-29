import styled from "styled-components";

const Change = () => {
  return (
    <ChangeComponents>
      <ChangeGuideBox>
        <ChangeTitle>PAYMENT INFO</ChangeTitle>
        <ChangeContents>
          고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
          확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
          아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
          <br />
          <br />
          무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
          가까운 은행에서 직접 입금하시면 됩니다.
          <br />
          주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
          7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
        </ChangeContents>
      </ChangeGuideBox>
      <ChangeGuideBox>
        <ChangeTitle>DELIVERY INFO</ChangeTitle>
        <ChangeContents>
          배송 방법 : 택배
          <br />
          배송 지역 : 전국지역
          <br />
          배송 비용 : 2,500원
          <br />
          배송 기간 : 3일 ~ 7일
          <br />
          배송 안내 : 산간벽지나 도서지방은 별도의 추가금액을지불하셔야 하는
          경우가 있습니다. 고객님께서 주문하신 상품은 입금 확인후 배송해
          드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수
          있습니다.
        </ChangeContents>
      </ChangeGuideBox>
      <ChangeGuideBox>
        <ChangeTitle>EXCHANGE INFO</ChangeTitle>
        <ChangeContents>
          <b className="bold">교환 및 반품이 가능한 경우</b>
          <br />
          - 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의
          <br />
          경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는
          교환/반품이 불가능합니다.
          <br />
          - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과
          <br />
          다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그사실을
          알게 된 날로부터 30일이내
          <br />
          <br />
          <b className="bold">교환 및 반품이 불가능한 경우</b>
          <br />
          - 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의
          내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
          <br />
          - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
          <br />
          (예 : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터,
          디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에
          따릅니다.)
          <br />
          - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한
          경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.
          <br />
          - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히
          감소한 경우
          <br />
          - 복제가 가능한 상품등의 포장을 훼손한 경우 (자세한 내용은
          고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.)
          <br />※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
          고객님께서 부담하셔야 합니다. (색상 교환, 사이즈 교환 등 포함)
        </ChangeContents>
      </ChangeGuideBox>
      <ChangeGuideBox>
        <ChangeTitle>SERVICE INFO</ChangeTitle>
      </ChangeGuideBox>
    </ChangeComponents>
  );
};

const ChangeComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ChangeGuideBox = styled.div`
  width: 50%;
`;

const ChangeTitle = styled.div`
  padding: 25px 0;
  font-weight: bold;
  font-size: 20px;
`;

const ChangeContents = styled.div`
  display: block;
  padding-right: 45px;
  color: #6d6d6d;
  line-height: 22px;
  font-size: 13px;
  .bold {
    font-weight: bold;
  }
`;

export default Change;
