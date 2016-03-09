export default function(state = null, action) {
  console.log('action recieved test: ', action);
  return [[0, 'X'],[1, 'O'],[2, 'X']]
}