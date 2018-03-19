import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyComponent from './commonComponents/myComponents';
// import 


class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <MyComponent />
                </MuiThemeProvider>

            </div>
        );
    }
}

export default App;