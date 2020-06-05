//beomyeonandrewkim.github.io/posts/algorithm/longest-palindrom/
// abcdcba	--> 7
// abacde --> 3

function solution(s) {
  if (s === s.split("").reverse().join("")) {
    return s.length;
  } else {
    let first = solution(s.substring(0, s.length - 1));
    let second = solution(s.substring(1, s.length));
    return Math.max(first, second);
  }
}

console.log(solution("abcdcba"));
