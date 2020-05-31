import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { PlaySansu } from '../containers/play';

//ページの中身用のコンポーネントを作成
const topPage = () => (
  <div>
    <h1>Top Page</h1>ここがトップページです
  </div>
);

function Play() {
  return (
    <div>
      <PlaySansu />
    </div>
  );
}

const page2 = () => (
  <div>
    <h1>page2</h1>
  </div>
);

const page3 = () => (
  <div>
    <h1>page3</h1>
  </div>
);

const Body = () => {
  const liStyle = {
    display: 'inline',
    width: '100px',
  };

  return (
    <Router>
      <div>
        <ul style={{ display: 'flex' }}>
          <li style={liStyle}>
            <Link to="/">top</Link>
          </li>
          <li style={liStyle}>
            <Link to="/play">Play</Link>
          </li>
          <li style={liStyle}>
            <Link to="/page2">page2</Link>
          </li>
          <li style={liStyle}>
            <Link to="/page3">page3</Link>
          </li>
        </ul>

        <div>
          <Route path="/" exact component={topPage} />
          <Route path="/play" exact component={Play} />
          <Route path="/page2" exact component={page2} />
          <Route path="/page3" exact component={page3} />
        </div>
      </div>
    </Router>
  );
};

export { Body };
