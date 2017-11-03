export function ACTION_handleHomePoints(pointAmount) {
  return {
    type: 'HOME_POINTS',
    pointAmount,
  };
}

export function ACTION_handleAwayPoints(pointAmount) {
  return {
    type: 'AWAY_POINTS',
    pointAmount,
  };
}
