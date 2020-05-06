import * as React from 'react';
import { Menu } from './Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    type: 'dark', // ベースのテーマ lightかdarkか
    primary: blue, // primaryのカラー
    secondary: yellow, // secondaryのカラー
  },
  appBar: {
    height: 50,
  },
});

function App(): JSX.Element {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <AppBar title="My AppBar" />
        <Menu />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
