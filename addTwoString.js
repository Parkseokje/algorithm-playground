// https://medium.com/@nitinpatel_20236/javascript-adding-extremely-large-numbers-and-extra-long-factorials-229b6055cb1a

var args = process.argv.slice(2);

// console.log(args);
console.log(add(args[0], args[1]));

function add(str1 = args[0], str2 = args[1]) {
  var temp = '';
  
  // 둘중의 더 긴 문자열을 str1으로 이동
  if (str1.length < str2.length) {
    temp = str1;
    str1 = str2;
    str2 = temp;
  }
  
  console.log(str1, str2)
  var left = 0;
  var right = 0;
  var digit = ''; // left+right 결과의 끝 1자리
  var carry = 0; // left+right 결과의 올림 수 (ex. 4+8=12, 2:digit, 1:carry)
  var sum = ''; // 이전 for문의 digits

  for (var i = 0; i < str1.length; i++) {
    // 문자열의 끝자리부터 비교를 시작
    left = parseInt(str1[str1.length - 1 - i]) || 0;
    right = parseInt(str2[str2.length - 1 - i]) || 0;

    temp = String(carry + left + right);
    digit = temp.charAt(temp.length - 1); // left+right 결과의 끝 1자리
    carry = parseInt(temp.substr(0, temp.length - 1)) || 0; // 올림

    // i가 맨 앞자리일 경우 temp(carry+left+right) + sum
    sum = i === str1.length - 1 ? temp.concat(sum) : digit.concat(sum);
  }

  return sum;
}

// console.log(add('3214123421341235345', '9809183208531409580348597'));
