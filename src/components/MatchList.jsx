import React from 'react';

export default class MatchList extends React.Component{
  constructor(props){
    super(props)
    this.state = {liveMatches:[],upcomingMatches:[]}
  }
  componentDidMount(){

    var self= this;

    let liveMatches =[],
        upcomingMatches = [];
    let matchSegregation = new Promise(function(resolve,reject){
      self.props.matchData.matches.forEach(function(match){

        if(match.matchStarted){
          liveMatches.push(match)
        }
        else {

          upcomingMatches.push(match)
        }
      })
      if(liveMatches.length>0|| upcomingMatches.length>0){
        console.log("resolving")
        resolve(liveMatches,upcomingMatches)
      }
      else{
        console.log("rejecting")
        reject("Some error occured")
      }
    })

    matchSegregation.then(function(liveMatches,upcomingMatches){
      self.setState({liveMatches:liveMatches,upcomingMatches:upcomingMatches})
    })

  }

  render(){

    return(
      <div>

      </div>
    )

  }
}
