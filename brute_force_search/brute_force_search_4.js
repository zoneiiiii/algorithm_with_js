// lv.2 카펫

function solution(brown, yellow) {
  const square = brown + yellow;

  var width = 3;
  var height = 1;

  while (true) {
    height = square / width;
    let remain = square % width;
    if (
      remain === 0 &&
      width >= height &&
      yellow === (height - 2) * (width - 2)
    ) {
      return [width, height];
    }
    width++;
  }
}
