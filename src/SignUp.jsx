import React from 'react';
import { Link } from 'react-router-dom';

// https://wpioneer.tistory.com/251  링크 세팅, 라우팅
// https://velog.io/@jin_h2_/React-%EB%A7%81%ED%81%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0-Router-Link-useNavigate-hook
// -> url 변경해도 같은 화면 보이는 거 ; ;

const SignUp = () => {
    return(
        <div>
            <h1>SignUp-Page</h1>
            <Link to="/">Go to HomePage</Link>;
        </div>
    );
}

export default SignUp;