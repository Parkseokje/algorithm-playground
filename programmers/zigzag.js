https:
//m.blog.naver.com/PostView.nhn?blogId=azure0777&logNo=220276103335&proxyReferer=https:%2F%2Fwww.google.com%2F
// n x n 크기의 행렬의 각 칸에 1부터 n2 까지의 숫자가 지그재그 방향으로 채워져 있습니다. 다음은 n = 5인 경우의 예시입니다.

// image

// 이때 r 행, c 열의 칸에 어떤 숫자가 적혀있는지 구하려고 합니다. 예를 들어 위 그림에서 r = 3, c = 2인 경우 3행, 2열의 위치에는 9가 들어있습니다. 지그재그 행렬의 크기 n, 행의 위치 r, 열의 위치 c가 매개변수로 주어질 때, n x n 크기의 지그재그 행렬의 r 행 c 열에 들어있는 숫자를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 10,000,000 이하의 자연수입니다.
// r과 c는 각각 1 이상 n 이하의 자연수입니다.
// 정답이 231 - 1보다 커질 수 있음에 주의하세요.
// 입출력 예
// n	r	c	result
// 5	3	2	9
// 6	5	4	29
// 입출력 예 설명
// 입출력 예 #1
// 문제의 그림을 참고해주세요.

// 입출력 예 #2
// 다음 그림을 참고해주세요.
function solution(n, r, c) {
  var answer = 0;
  var matrix = makeZigzagArr(n, n);

  console.log(matrix);

  answer = matrix[r - 1][c - 1];

  return answer;
}

function makeZigzagArr(nrows, ncols) {
  let arr = new Array(nrows).fill(0).map((row) => new Array(ncols).fill(0));
  let count = 1;
  let total = nrows * ncols; // 전체 칸의 수
  let x = 0;
  let y = -1;
  let dir = "UP"; // Or DOWN

  while (count <= total) {
    if (x === ncols - 1 && count <= total) {
      arr[++y][x] = count++;
      dir = "DOWN";
    }

    if (y === nrows - 1 && count <= total) {
      arr[y][++x] = count++;
      dir = "UP";
    }

    if (y == 0 && count <= total) {
      arr[y][++x] = count++;
      dir = "DOWN";
    }

    if (x == 0 && count <= total) {
      arr[++y][x] = count++;
      dir = "UP";
    }

    if (dir === "UP" && x !== ncols - 1 && y !== 0 && count <= total) {
      arr[--y][++x] = count++;
    }

    if (dir === "DOWN" && y !== nrows - 1 && x !== 0 && count <= total) {
      arr[++y][--x] = count++;
    }
  }

  return arr;
}

// console.log(makeZigzagArr(5, 5));
// console.log(solution(5, 3, 2));
console.log(solution(6, 5, 4));
