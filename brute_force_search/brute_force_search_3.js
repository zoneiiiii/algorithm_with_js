// lv.2 소수 찾기

function solution(numbers) {
  var answer = 0;
  
  // 소수 판단
  function sosu(num) {
      let cnt = 0;
      if (num===0 || num===1) return false;
      for (let i=1; i<=num; i++) {
          if (num%i===0) cnt++;
      }
      if (cnt===2) return true;
      else return false;
  }
  
  // 순열
  const permutation = new Set();

  makePermutation('', numbers);

  // 모든 순열 구하기
  function makePermutation(perm, others) {
      if (perm !== '') {
          permutation.add(Number(perm));
      }
      for (let i=0; i < others.length; i++) {
          const remove_i_others = others.substr(0,i) + others.substr(i+1);
          makePermutation(perm + others[i], remove_i_others);
      }
  }
  
  // 소수 개수 세기
  for (let item of permutation) {
      if (sosu(item)) answer++;
  }

  return answer;
}
