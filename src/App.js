import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SignUp from './SignUp';
//  새로고침 없이 이동 -> Link 사용


// https://www.daleseo.com/react-router-basic/
// 이거 참고해서 다시 해보쟈

function App() {
  return (
    <BrowserRouter>
        <header>
          <h1>HomePage</h1>
          {/* <button onClick={onClickSignUp}>회원가입</button> */}
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/SignUp">
              <button>회원가입</button>
            </Link>
        </header>
        <main>
            <Route path = '/SignUp/' elenment={<SignUp />} />
        </main>
    </BrowserRouter>
  );
};

export default App;
