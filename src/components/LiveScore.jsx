import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
export default class LiveScore extends React.Component{



  // componentDidMount(){
    // var socket = io('http://192.168.43.147:3000');
    // socket.on('live-score',function(msg){
    //   console.log(msg);
    // })
  // }

  render(){
    return(
      <Card>
          <CardHeader
            title="IPL (tournament name)"
            subtitle="Match starts soon"
            avatar={this.props.matchTime}
            />
          <CardMedia
            overlay={<CardTitle title={this.props.match.team1} + "vs" + {this.props.match.team2}
             subtitle="Kya SRH chhuda paegi KKR ke chakke?" />}
            >
            <img src="images/nature-600-337.jpg" />
          </CardMedia>
          <CardTitle title="Yahan Score aaega" subtitle="Yahan kuch aur" />

          <CardActions>
            <FlatButton label="Action1" />
           
          </CardActions>
    </Card>
    )
  }
}
