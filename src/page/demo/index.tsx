import React, { useEffect } from 'react';
import icon from '../../assets/imgs/demo.png';

const Demo: React.FunctionComponent = () => {
  const map1 = [
    [0, 5, 2, 6, Infinity],
    [Infinity, 0, Infinity, Infinity, 1],
    [Infinity, 1, 0, 3, 5],
    [Infinity, Infinity, Infinity, 0, 2],
    [Infinity, Infinity, Infinity, Infinity, 0],
  ];

  const map2 = [
    [0, 4, Infinity, 2, Infinity],
    [4, 0, 4, 1, Infinity],
    [Infinity, 4, 0, 1, 3],
    [2, 1, 1, 0, 7],
    [Infinity, Infinity, 3, 7, 0],
  ];

  const findMin = (list: { len: number; through: number[] }[], visited: boolean[]) => {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < list.length; i++) {
      if (min > list[i].len && !visited[i]) {
        minIndex = i;
        min = list[i].len;
      }
    }
    return minIndex;
  };

  const dijkstra = (map: number[][]) => {
    // 设置初始值
    const catchList: { len: number; through: number[] }[] = map[0].map((item) => ({ len: item, through: [] }));
    const visited = [];
    for (let i = 0; i < map.length; i++) {
      const m = findMin(catchList, visited);
      visited[m] = true;
      for (let j = 0; j < map[i].length; j++) {
        if (catchList[m].len + map[m][j] <= catchList[j].len) {
          catchList[j].len = catchList[m].len + map[m][j];
          catchList[j].through.push(m);
        }
      }
    }
    return catchList;
  };

  useEffect(() => {
    console.log(dijkstra(map2));
  }, []);

  return (
    <>
      <div>
        <img alt='路径图' src={icon} />
      </div>
    </>
  );
};
export default Demo;
