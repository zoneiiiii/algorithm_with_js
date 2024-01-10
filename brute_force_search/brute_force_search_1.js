// lv.1 최소직사각형

function solution(sizes) {
  var max = 0;
  var max1 = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      const temp = sizes[i][1];
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = temp;
    }
    if (max < sizes[i][0]) {
      max = sizes[i][0];
    }
    if (max1 < sizes[i][1]) {
      max1 = sizes[i][1];
    }
  }
  return max * max1;
}
