import React from 'react';
import styled from "styled-components";
import SignUpTopBar from './SignUpTopBar';
const SignUpTopBarStyle=styled.div`
    .HomeText{
        margin:30px;
    }
    h1{
        font-size:40px;
    }
    span,p{
        color:rgb(90, 90, 90);
        font-size:20px;
    }
    .HomeContainer{
        transform:translate(0%,60%);
    }
    .HomeSignUpBtn{
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
const SignUpHome = () => {
    return (
        <>
        <SignUpTopBar/>
        <SignUpTopBarStyle>
        <div className='HomeContainer'>
            <span className='HomeText'>데이터 수집을 위한 올인원 툴</span>
            <h1 className='HomeText'>폼을 만들고 분석하는<br/>
            가장 합리적인 방법</h1>
            <p className='HomeText'>폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요<br/>
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.</p>
            <button className='HomeSignUpBtn'>회원가입</button>
        </div>
        </SignUpTopBarStyle>
        </>
    );
};

export default SignUpHome;