import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

// 참고자료
// https://velog.io/@devfrank9/React7-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8F%BC-%EC%9C%A0%ED%9A%A8%EC%84%B1%EA%B2%80%EC%82%AC-%EA%B9%94%EB%81%94%ED%95%98%EA%B2%8C-%EC%8D%A8%EB%B3%B4%EA%B8%B0-ft.-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8

// React Hook Form
// https://jjang-j.tistory.com/47
// https://cocococo.tistory.com/entry/React-React-Hook-Form

// 비밀번호 일치 유효성 체크h
// https://velog.io/@h_jinny/React-hook-form-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%9D%BC%EC%B9%98-%EC%9C%A0%ED%9A%A8%EC%84%B1%EC%B2%B4%ED%81%AC

const Container = styled.div`
  font-family: "Noto Sans KR";
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
  height: 400px;
  display: column;
  margin-bottom: 10px;
`;

const InputInfo = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 8px 15px;
`;

const InputBox = styled.input`
  width: 95%;
  height: 30px;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  border: 2px solid #e0e0e0;
  font-size: 15px;
  &:focus {
    outline-color: #81d4fa;
  }
`;

const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // const onClickHandler = () => {
  //   alert("Submitted");
  // };

  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextBox>
            <InputInfo>이메일</InputInfo>
            <InputBox
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
              })}
              errors={errors}
              placeholder="ssafe11@gmail.com"
            />
            {errors.email && "유효하지 않은 이메일입니다."}
            <InputInfo>비밀번호</InputInfo>
            <InputBox
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다",
                minLength: 8,
                maxLength: 16,
                // 비밀번호는 8자 이상 16자 이하의 문자열로 하나 이상의 영문자와 하나 이상의 숫자, 하나 이상의 특수문자로 구성되어야합니다.
              })}
              errors={errors}
              placeholder="********"
            />
            {errors.password && "유효하지 않은 비밀번호입니다."}
            <InputInfo>비밀번호 확인</InputInfo>
            <InputBox
              id="passwordCheck"
              type="password"
              {...register("passwordCheck", {
                required: "비밀번호 확인이 필요합니다",
              })}
              placeholder="********"
            />
          </TextBox>
          <SignupButton type="submit">회원가입</SignupButton>
        </form>
      </TextBoard>
    </Container>
  );
};

export default Signup;
