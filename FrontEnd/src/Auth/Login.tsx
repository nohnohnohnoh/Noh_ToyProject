import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { authLogin } from "../actions/Actions";
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
  height: 100vh;
`;

const AuthLoginSection = styled.section`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
`;

const AuthLoginLogoBox = styled.div`
  height: 20vh;
  padding-top: 5%;
  ${({ theme }) => theme.flexMixIn("center", "center")};
`;

const AuthLoginLogo = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const AuthLoginForm = styled.form`
  width: 50%;
  height: 60vh;
  ${({ theme }) => theme.flexMixIn("flex-start", "center")};
  flex-direction: column;
`;

const AuthLoginId = styled.input`
  width: 50%;
  height: 48px;
  margin-bottom: 1%;
  padding: 0 20px;
  border: 1px solid #e3e3e3;
`;

const AuthLoginPassWord = styled(AuthLoginId)``;

const AuthLoginButton = styled.button`
  width: 50%;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 3%;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
`;

const AuthCreateBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
  width: 50%;
  height: 232px;
  margin-top: 5%;
  border: 1px solid #e3e3e3;
`;

const AuthCreateBoxTitle = styled.div`
  margin-bottom: 2%;
  font-size: 19px;
  font-weight: 700;
  color: #1a1a1a;
`;

const AuthCreateBoxContent = styled.div`
  margin-bottom: 4%;
  font-size: 14px;
  line-height: 1.5;
  color: #8a8a8a;
  ${({ theme }) => theme.flexMixIn("center", "center")};
  flex-direction: column;
`;

const AuhtCreteBoxButton = styled.button`
  width: 37%;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  border: 1px solid #d6d6d6;
  background: none;
`;

export default AuthLogin;
