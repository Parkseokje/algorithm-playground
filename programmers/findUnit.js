// 예를 들어 위 그림에서는 (1, 4) 위치에 플레이어가 선택하는 영역의 시작 지점 s가 있으며, (4, 1) 위치에 끝 지점 e가 있습니다. 이때 색칠된 부분이 플레이어가 선택한 영역이 되며, 색칠해진 영역 안에 있는 유닛은 (1, 1), (2, 2), (3, 3) 위치의 3개입니다. (경계선에 위치한 유닛도 선택됩니다)

// 현재 유닛들의 위치를 담고 있는 배열 location과 플레이어가 선택한 영역의 시작 위치 s, 끝 위치 e가 매개변수로 주어질 때, 선택되는 유닛의 개수를 return 하도록 solution 함수를 완성해 주세요.

// 제한 사항
// location은 N(1 ≤ N ≤ 10,000)개의 유닛들 위치를 담고 있는 배열입니다.
// location의 각 원소는 유닛들이 위치한 좌표(xi, yi)를 나타냅니다.
// 유닛들이 위치한 좌표 (xi, yi)의 범위 : 0 ≤ xi, yi ≤ 100,000, xi, yi 는 정수
// 같은 위치에 두 개 이상의 유닛이 있는 경우는 없습니다.
// s는 플레이어가 선택하는 영역의 시작점 (xs, ys)를, e는 끝점 (xe, ye)를 나타냅니다(0 ≤ xs, ys, xe, ye ≤ 100,000, xs, ys, xe, ye는 정수).
// s와 e는 xs ≠ xe, ys ≠ ye인 경우만 입력으로 주어집니다.
// 입출력 예
// location	s	e	result
// [[0, 3], [1, 1], [1, 5], [2, 2], [3, 3], [4, 0]]	[1, 4]	[4, 1]	3
// [[0, 3], [1, 1], [1, 5], [2, 2], [3, 3], [4, 0]]	[3, 4]	[0, 0]	4
// 입출력 예 설명

function solution(location, s, e) {
  let answer = 0;
  const [xs, ys] = s;
  const [xe, ye] = e;

  for (
    let i = (xs > xe ? xe : xs);
    i <= (xs > xe ? xs : xe);
    i++
  ) {
    if (location.length === 0) break;
    for (
      let j = (ys > ye ? ye : ys);
      j <= (ys > ye ? ys : ye);
      j++
    ) {
      for (let k = 0; k < location.length; k++) {
        if (location[k][0] === i && location[k][1] === j) {
          //   console.log(location[k]);
          answer++;
          location.splice(k, 1);
          break;
        }
      }
    }
  }

  return answer;
}

const location = [[0, 3], [1, 1], [1, 5], [2, 2], [3, 3], [4, 0]];
// const s = [3, 4];
// const e = [0, 0];
const s = [4, 1];
const e = [1, 4];
console.log(solution(location, s, e));

// (1,4)(2,4)(3,4)(4,4)
// (1,3)(2,3)(3,3)(4,4)
// (1,2)(2,2)(3,2)(4,2)
// (1,1)(2,1)(3,1)(4,1)
