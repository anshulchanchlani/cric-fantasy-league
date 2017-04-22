import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './AppBar.jsx'
import MatchList from './MatchList.jsx';
import LiveScore from './LiveScore.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MatchData from './dummy.json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();



export default class App extends React.Component{

  render(){
    return(
      <MuiThemeProvider>
        <div>
        <AppBar />
        <MatchList matchData={MatchData}/>
        <LiveScore />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("app"))
