import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { ACTION_handleHomePoints, ACTION_handleAwayPoints } from './actions';

class App extends Component {

  constructor() {
    super();
    this.handleHomePoints = this.handleHomePoints.bind(this);
    this.handleAwayPoints = this.handleAwayPoints.bind(this);
  }

  handleHomePoints(score){
    this.props.dispatch(ACTION_handleHomePoints(2));
  }

  handleAwayPoints(score){
    this.props.dispatch(ACTION_handleAwayPoints(2));
  }

  render() {
      return (
      <div className="App">
        <p>
        Home Team: {this.props.homeTeam}
        </p>
        <p>
        {this.props.homeScore}
        </p>
        <button onClick={() => {this.handleHomePoints(this.props.homeScore)}}>
          Home Score
        </button>
        <p>
        Away Team: {this.props.awayTeam}
        </p>  
        <p>
        {this.props.awayScore}
        </p>
        <button onClick={() => {this.handleAwayPoints(this.props.awayScore)}}>
          Away Score
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeTeam: state.homeTeam,
  awayTeam: state.awayTeam,
  homeScore: state.homeScore,
  awayScore: state.awayScore
});

export default connect(mapStateToProps)(App);
