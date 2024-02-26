import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  height: 70px;
  display: flex;
  background-color: pink;
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

const Texti = styled.div`
  width: flex;
  height: 10px;
  color: #263238;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  border-radius: 60px;
  background-color: #b2ebf2;
`;

const WriteButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 15px;
  background-color: black;
  border-radius: 10px;
  color: white;
`;

const Header = () => {
  return (
    <>
      <HeaderArea>
        <Logo>폼나는 싸패</Logo>
        <Texti style={{ color: "#9E9E9E", backgroundColor: "#EEEEEE" }}>
          v 3.4.1 24/02/13
        </Texti>
        <Texti style={{ color: "#26C6DA" }}>
          2024 SSAFE FORM PROJECT Creare your own Form
        </Texti>
        <WriteButton>바로 작성하기</WriteButton>
      </HeaderArea>
    </>
  );
};

export default Header;
