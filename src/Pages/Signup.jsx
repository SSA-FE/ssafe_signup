import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";



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
                pattern: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-za-z0-9-]+/,
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
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/
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
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/
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
