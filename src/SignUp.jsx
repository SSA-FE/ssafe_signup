import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//회원가입 button은 Home에서 완성하면 옮기자
const TextBoard = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 500px;
  height: 100px;
  justify-content: center;
  background-color: #fff8e1;
`;

const InputText = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  border-color: #e0e0e0;
`;

const SignupButton = styled.button`
  width: 280px;
  height: 45px;
  font-size: 17px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const Signup = () => {
  return (
    <TextBoard>
      <Title>
        더 쉬운 폼을 위한 시작
        <br />
        폼나는싸패
      </Title>
      <TextBox>
        이메일
        <br />
        <InputText placeholder="ssafe11@gmail.com"></InputText>
      </TextBox>
      <TextBox>
        비밀번호
        <br />
        <InputText></InputText>
      </TextBox>
      <TextBox>
        비밀번호 확인
        <br />
        <InputText></InputText>
      </TextBox>
      <Link to="/">
        <SignupButton>회원가입</SignupButton>
      </Link>
    </TextBoard>
  );
};

export default Signup;
