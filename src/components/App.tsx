import * as React from 'react';
import { Body } from './body';
import { Header } from './Header';
import { Footer } from './footer';
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
      <div className="app-root">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Body />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
