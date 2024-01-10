// lv.2 게임 맵 최단거리

function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];
  const len1 = maps.length;
  const len2 = maps[0].length;

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [x, y, move] = queue.shift();
    if (x === len1 - 1 && y === len2 - 1) return move;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < len1 && 0 <= ny && ny < len2 && maps[nx][ny] === 1) {
        queue.push([nx, ny, move + 1]);
        maps[nx][ny] = 0;
      }
    }
  }
  return -1;
}
