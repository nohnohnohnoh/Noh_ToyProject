import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createAuth } from "../api/Auth";

const AuthCreate = () => {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [pwc, setPwc] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };

  const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassWord(value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPwc(value);
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickName(value);
  };

  const onSubmitCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAuth({
      id: id,
      passWord: passWord,
      pwc: pwc,
      nickName: nickName,
    }).then((data) => {
      if (data.message === "회원가입이 정상적으로 이루어졌습니다.") {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <AuthCreateMain>
      <AuthCreateSection>
        <AuthCreateLogoBox>
          <AuthCreateLogo>회원가입</AuthCreateLogo>
        </AuthCreateLogoBox>
        <AuthCreateForm onSubmit={onSubmitCreate}>
          <AuthCreateId
            onChange={onChangeId}
            placeholder="아이디"
            type="text"
          />
          <AuthCreatePassWord
            onChange={onChangePassWord}
            placeholder="비밀번호"
            type="password"
          />
          <AuthCreatePwc
            onChange={onChangePw}
            placeholder="비밀번호 확인"
            type="password"
          />
          <AtuhCreateName
            onChange={onChangeNickName}
            placeholder="닉네임"
            type="text"
          />
          <AuthCreateButton>회원가입</AuthCreateButton>
          <AuthLoginBox>
            <AuthLoginBoxTitle>회원이신가요?</AuthLoginBoxTitle>
            <AuthLoginBoxContent>
              로그인 하시면 다양한 상품이 기다리고 있습니다.
            </AuthLoginBoxContent>
            <AuthLoginBoxButton onClick={navigateLogin}>
              로그인
            </AuthLoginBoxButton>
          </AuthLoginBox>
        </AuthCreateForm>
      </AuthCreateSection>
    </AuthCreateMain>
  );
};

const AuthCreateMain = styled.main`
  width: 100vw;
`;

const AuthCreateSection = styled.section`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
`;

const AuthCreateLogoBox = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 40px auto 40px;
  ${({ theme }) => theme.flexMixIn("center", "center")};
  ${({ theme }) => theme.media.desktop`
    margin: 0;
    padding: 20px 0;
  `}
`;

const AuthCreateLogo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  ${({ theme }) => theme.media.desktop`
    font-size: 18px;
  `}
`;

const AuthCreateForm = styled.form`
  width: 100%;
  max-width: 400px;
  ${({ theme }) => theme.flexMixIn("flex-start", "center")};
  flex-direction: column;
  ${({ theme }) => theme.media.desktop`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  `}
`;

const AuthCreateId = styled.input`
  width: 100%;
  max-width: 400px;
  height: 48px;
  margin-bottom: 1%;
  padding: 0 20px;
  border: 1px solid #e3e3e3;
  ${({ theme }) => theme.media.desktop`
    max-width: 90%;
  `}
`;

const AuthCreatePassWord = styled(AuthCreateId)``;
const AuthCreatePwc = styled(AuthCreateId)``;
const AtuhCreateName = styled(AuthCreateId)``;

const AuthCreateButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 56px;
  margin-top: 3%;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  ${({ theme }) => theme.media.desktop`
    max-width: 90%;
  `}
`;

const AuthLoginBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 232px;
  margin: 5% 0 40px 0;
  border: 1px solid #e3e3e3;
  ${({ theme }) => theme.media.desktop`
    max-width: 90%;
  `}
  ${({ theme }) => theme.media.mobile`
    height: 182px;
  `}
`;

const AuthLoginBoxTitle = styled.div`
  margin-bottom: 2%;
  font-size: 19px;
  font-weight: 700;
  color: #1a1a1a;
`;

const AuthLoginBoxContent = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
  margin-bottom: 4%;
  font-size: 14px;
  line-height: 1.5;
  color: #8a8a8a;
  ${({ theme }) => theme.media.mobile`
  font-size: 12px;
  `}
`;

const AuthLoginBoxButton = styled.button`
  width: 150px;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  border: 1px solid #d6d6d6;
  background: none;
`;

export default AuthCreate;
