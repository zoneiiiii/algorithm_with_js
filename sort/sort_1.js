// lv.1 K번째 수

function solution(array, commands) {
  var answer = [];
  var arr = [];
  commands.forEach((x) => {
    arr = array.slice(x[0] - 1, x[1]);
    arr.sort((a, b) => a - b);
    answer.push(arr[x[2] - 1]);
  });
  return answer;
}
