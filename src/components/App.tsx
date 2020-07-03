import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './footer';
import { Play, topPage, page2, page3 } from './play';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import yellow from '@material-ui/core/colors/yellow';
import './App.scss';

const muiTheme = createMuiTheme({
  palette: {
    primary: cyan, // primaryのカラー
    secondary: yellow, // secondaryのカラー
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <div className="app-root">
          <Header />
          <div className="app-body">
            <Switch>
              <Route path="/" exact component={topPage} />
              <Route path="/play" exact component={Play} />
              <Route path="/page2" exact component={page2} />
              <Route path="/page3" exact component={page3} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
