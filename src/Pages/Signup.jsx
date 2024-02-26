import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const TextBoard = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
`;

const TextBox = styled.div`
  width: flex;
  height: 100px;
  display: column;
  margin-bottom: 10px;
`;

const InputInfo = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin: 0px 10px 8px 15px;
`;

const InputText = styled.input`
  width: 95%;
  height: 30px;
  padding: 10px;
  border-radius: 30px;
  border-color: #e0e0e0;
  border-style: solid;
  font-size: 15px;
`;

const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  margin-top: 50px;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <TextBox>
          <InputInfo>이메일</InputInfo>
          <InputText placeholder="ssafe11@gmail.com"></InputText>
        </TextBox>
        <TextBox>
          <InputInfo>비밀번호</InputInfo>
          <InputText></InputText>
        </TextBox>
        <TextBox>
          <InputInfo>비밀번호 확인</InputInfo>
          <InputText></InputText>
        </TextBox>
        <Link to="/">
          <SignupButton>회원가입</SignupButton>
        </Link>
      </TextBoard>
    </Container>
  );
};

export default Signup;
