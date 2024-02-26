import React from 'react';
import styled from "styled-components";
import SignUpTopBar from './SignUpTopBar';
const SignUpMainStyle=styled.div`
.MainContainer{
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:50px;
}
h1{
  font-size:40px;
  margin:30px;
}
b{
  text-align:left;
  width:330px;
  margin:30px 5px 5px 5px;
}
span{
  display:none;
  color:red;
  text-align:left;
  width:330px;
  5px;
}
input{
  width:350px;
  height:50px;
  background-color:white;
  border-radius:30px;
  border:3px solid rgb(220, 220, 220);
}
.MainSignUpBtn{
  margin-top:40px;
  background-color:skyblue;
  width:350px;
  height:50px;
  border-radius:30px;
  border:none;
  color:white;
  font-size:20px;
  font-weight:700;
}
`
const SignUpMain = () => {
    return (    
        <>
          <SignUpTopBar/>
          <SignUpMainStyle>
            <div className='MainContainer'>
            <h1 className='MainText'>
              더 쉬운 폼을 위한 시작<br/>
              폼나는 싸패
            </h1>
            <b>이메일</b>
            <input className='MainInputEmail'></input>
            <span className='MainInputEmailErr'>유효하지않은 이메일 입니다.</span>
            <b>비밀번호</b>
            <input className='MainInputPw'></input>
            <span className='MainInputPwErr'>유효하지않은 비밀번호 입니다.</span>
            <b>비밀번호 확인</b>
            <input className='MainInputPwCheck'></input>
            <span className='MainInputPwCheckErr'>비밀번호가 일치하지 않습니다.</span>
            <button className='MainSignUpBtn'>회원가입</button>
            </div>
          </SignUpMainStyle>
        </>
    );
};

export default SignUpMain;