import './App.css';

import SignUpTopBar from './Components/SignUpTopBar';
import SignUpHome from './Components/SignUpHome';
import SignUpMain from './Components/SignUpMain';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route,Routes} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  font-family:Interop;
}
`;
function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<SignUpHome/>} />
        <Route path="/main" element={<SignUpMain/>} />
      </Routes>
    </>
   
    
  );
}

export default App;
