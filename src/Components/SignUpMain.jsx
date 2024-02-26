import React, { useState } from 'react';
import styled from "styled-components";
import SignUpTopBar from './SignUpTopBar';
const SignUpInputStyle=styled.div`
display:flex;
flex-direction:column;
align-items:center;

b{
  text-align:left;
  width:330px;
  margin:30px 5px 5px 5px;
}
span{
  
  color:red;
  text-align:left;
  width:330px;
  margin:5px;
  display: ${(props) => (props.error ? 'block' : 'none')};
}
input{
  width:350px;
  height:50px;
  background-color:white;
  border-radius:30px;
  border:3px solid rgb(220, 220, 220);
  padding-left:20px;
}
input:focus{
  border:3px solid skyblue;
  outline:none;
}
`
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
  text-align:center;
}

.MainSignUpBtn{
  margin-top:40px;
  background-color:skyblue;
  width:370px;
  height:50px;
  border-radius:30px;
  border:none;
  color:white;
  font-size:20px;
  font-weight:700;
}
`

const SignUpMain = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false); 
    
    const checkEmail = () => {
      if (!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    
    }
    return (    
        <>
          <SignUpTopBar/>
          <SignUpMainStyle>
            <div className='MainContainer'>
            <h1 className='MainText'>
              더 쉬운 폼을 위한 시작<br/>
              폼나는 싸패
            </h1>
            <SignUpInputStyle error={emailError}>
            <b>이메일</b>
            <input className='MainInputEmail' placeholder='이메일을 입력하세요' value={email} onChange={(e)=>setEmail(e.target.value)}onBlur={checkEmail}></input>
            <span className='MainInputEmailErr'>유효하지않은 이메일 입니다.</span>
            </SignUpInputStyle>
            <SignUpInputStyle>
            <b>비밀번호</b>
            <input className='MainInputPw' placeholder='비밀번호를 입력하세요'></input>
            <span className='MainInputPwErr'>유효하지않은 비밀번호 입니다.</span>
            </SignUpInputStyle>
            <SignUpInputStyle>
            <b>비밀번호 확인</b>
            <input className='MainInputPwCheck' placeholder='비밀번호를 다시 입력하세요'></input>
            <span className='MainInputPwCheckErr'>비밀번호가 일치하지 않습니다.</span>
            </SignUpInputStyle>
            <button className='MainSignUpBtn'>회원가입</button>
            </div>
        
          </SignUpMainStyle>
        </>
    );
};

export default SignUpMain;