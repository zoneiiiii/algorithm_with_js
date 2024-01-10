// lv.3 네트워크

function solution(n, computers) {
  var answer = 0;
  const visited = [];
  for (let i = 0; i < n; i++) {
    visited.push(false);
  }
  function dfs(computerNumber) {
    visited[computerNumber] = true;

    for (let i = 0; i < n; i++) {
      if (i !== computerNumber && computers[computerNumber][i] == 1) {
        if (!visited[i]) {
          dfs(i);
        }
      }
    }
  }
  for (let computerNumber = 0; computerNumber < n; computerNumber++) {
    if (!visited[computerNumber]) {
      dfs(computerNumber);
      answer++;
    }
  }

  return answer;
}
