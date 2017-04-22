import React from 'react';
import NavBar from 'material-ui/AppBar';
import {lightGreen500} from 'material-ui/styles/colors';
const styles={
  navbar:{
    backgroundColor:lightGreen500,

  }
}
export default class AppBar extends React.Component{
  render(){
    return(

      <div>
        <NavBar style={styles.navbar} title="Power Play" />

      </div>
    )
  }
}
