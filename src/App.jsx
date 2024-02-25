import classNames from 'classnames';
import { Fragment } from 'react';
import { GlobalNav } from './layout/GlobalNav';

function App() {
  return (
    <Fragment>
      <GlobalNav />
      <main>메인 컨테이너</main>
    </Fragment>
  );
}

export default App;
