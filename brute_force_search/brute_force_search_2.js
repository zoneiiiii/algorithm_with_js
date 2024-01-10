// lv.1 모의고사

function solution(answers) {
  var answer = [];
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var cnt1 = 0;
  var cnt2 = 0;
  var cnt3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === num1[i % 5]) {
      cnt1++;
    }
    if (answers[i] === num2[i % 8]) {
      cnt2++;
    }
    if (answers[i] === num3[i % 10]) {
      cnt3++;
    }
  }

  var max = Math.max(cnt1, cnt2, cnt3);

  if (max === cnt1) answer.push(1);
  if (max === cnt2) answer.push(2);
  if (max === cnt3) answer.push(3);
  return answer;
}
