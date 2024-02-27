import './App.css';

import SignUpHome from './Pages/SignUpHome';
import SignUpMain from './Pages/SignUpMain';
import { createGlobalStyle } from 'styled-components';
import { Route,Routes} from "react-router-dom";
import { Reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
body {
  font-family:Interop;
}
`;
function App() {
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<SignUpHome/>} />
        <Route path="/main" element={<SignUpMain/>} />
      </Routes>
    </>
   
    
  );
}

export default App;
