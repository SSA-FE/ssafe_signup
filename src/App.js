import './App.css';

import SignUpTopBar from './Components/SignUpTopBar';
import SignUpHome from './Components/SignUpHome';
import SignUpMain from './Components/SignUpMain';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  font-family:Interop;
}
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <SignUpMain/>
      
    </div>
  );
}

export default App;
