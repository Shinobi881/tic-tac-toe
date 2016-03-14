expert const resetWin = () => {
  let rows = document.getElementsByTagName('tr');
  let squares = document.getElementsByTagName('td');
  console.log(rows);
  rows.classList.remove('game-winner');
  squares.classList.remove('game-winner');
};