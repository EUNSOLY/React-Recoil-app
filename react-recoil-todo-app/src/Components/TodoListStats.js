import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../TodoAtoms";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul className="stats">
      <li>Total Items : {totalNum}</li>
      <li> 완료 : {totalCompletedNum} 개</li>
      <li> 미 완료: {totalUncompletedNum} 개</li>
      <li> 실행율 : {formattedPercentCompleted} %</li>
    </ul>
  );
};

export default TodoListStats;
