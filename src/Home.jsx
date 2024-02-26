import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const Description = styled.div`
  text-align: center;
  font-size: 20px;
`;

const SignupButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #81d4fa;
  border-radius: 50px;
  border-color: transparent;
`;

// Button 아니고 Link 자체를 컴포넌트로 받을 방법?

const Home = () => {
  return (
    <Container>
      <>
        <SubTitle>데이터 수집을 위한 올인원 툴</SubTitle>
        <Title>
          폼을 만들고 분석하는
          <br />
          가장 합리적인 방법
        </Title>
        <Description>
          폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
          <br />
          모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
        </Description>
      </>
      <Link to="/Signup">
        <SignupButton>회원가입</SignupButton>
      </Link>
    </Container>
  );
};

export default Home;
