import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { authLogin } from "../actions/Actions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthLogin = () => {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate("/create");
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setId(value);
  };

  const onChangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassWord(value);
  };

  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authLogin({ id, passWord })).then(({ payload }: any) => {
      if (payload.message === "로그인이 정상적으로 이루어졌습니다.") {
        alert(payload.message);
        localStorage.setItem("AUTH_TOKEN", payload.data.token);
        navigate("/");
        window.location.reload();
      } else {
        alert(payload.message);
      }
    });
  };

  return (
    <AuthLoginMain>
      <AuthLoginSection>
        <AuthLoginLogoBox>
          <AuthLoginLogo>로그인</AuthLoginLogo>
        </AuthLoginLogoBox>
        <AuthLoginForm onSubmit={onSubmitLogin}>
          <AuthLoginId onChange={onChangeId} placeholder="아이디" type="text" />
          <AuthLoginPassWord
            onChange={onChangePassWord}
            placeholder="비밀번호"
            type="password"
          />
          <AuthLoginButton>로그인</AuthLoginButton>
          <AuthCreateBox>
            <AuthCreateBoxTitle>아직 회원이 아닌신가요?</AuthCreateBoxTitle>
            <AuthCreateBoxContent>
              지금 회원가입을 하시면
              <p /> 다양하고 특별한 혜택이 준비되어있습니다.
            </AuthCreateBoxContent>
            <AuhtCreteBoxButton onClick={navigateCreate}>
              회원가입
            </AuhtCreteBoxButton>
          </AuthCreateBox>
        </AuthLoginForm>
      </AuthLoginSection>
    </AuthLoginMain>
  );
};

const AuthLoginMain = styled.main`
  width: 100vw;
`;

const AuthLoginSection = styled.section`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
`;

const AuthLoginLogoBox = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 40px auto 40px;
  ${({ theme }) => theme.flexMixIn("center", "center")};
  ${({ theme }) => theme.media.desktop`
    margin: 0;
    padding: 20px 0;
  `}
`;

const AuthLoginLogo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  ${({ theme }) => theme.media.desktop`
    font-size: 18px;
  `}
`;

const AuthLoginForm = styled.form`
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

const AuthLoginId = styled.input`
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

const AuthLoginPassWord = styled(AuthLoginId)``;

const AuthLoginButton = styled.button`
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

const AuthCreateBox = styled.div`
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
      height: 202px;
  `}
`;

const AuthCreateBoxTitle = styled.div`
  margin-bottom: 2%;
  font-size: 19px;
  font-weight: 700;
  color: #1a1a1a;
`;

const AuthCreateBoxContent = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
  margin-bottom: 4%;
  font-size: 14px;
  line-height: 1.5;
  color: #8a8a8a;
`;

const AuhtCreteBoxButton = styled.button`
  width: 150px;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  border: 1px solid #d6d6d6;
  background: none;
`;

export default AuthLogin;
