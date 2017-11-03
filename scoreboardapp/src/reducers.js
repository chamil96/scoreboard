export default (state = {}, action) => {
  switch (action.type) {
    case 'HOME_POINTS':
      return {
        ...state,
        homeScore: state.homeScore += action.pointAmount
      }
    case 'AWAY_POINTS':
      return {
        ...state,
        homeScore: state.awayScore += action.pointAmount
      }

    case 'HOME_TEAM':
      return {
        ...state,
        homeScore: state.homeTeam = action.team
      } 

    case 'AWAY_TEAM':
      return {
        ...state,
        homeScore: state.awayTeam += action.team
      }

    default:
      return state;
  }
}