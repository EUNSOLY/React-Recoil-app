import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../TodoAtoms";

const TodoitemCreator = () => {
  // 입력된 TodoItem값을 얻기위한 useState
  const [inpurtValue, setInputValue] = useState("");
  // 전역 상태의 Atom setter 함수만을 활용하기 위해 사용 선언된 함수를 변수에 할당하여 사용
  const setTodoList = useSetRecoilState(todoListState);
  // value값을 state에 저장하기 위한 함수
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Atom에 TodoItem 업데이트를 위한 함수작성
  const addItem = () => {
    setTodoList((oldTodoList) => {
      return [
        // 불변성유지를 위해 스프레드문법사용
        ...oldTodoList,
        {
          id: getId(),
          text: inpurtValue,
          isComplete: false,
        },
      ];
    });
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inpurtValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
// 고유한 아이디 생성을 위한 함수
let id = 0;
function getId() {
  return id++;
}
export default TodoitemCreator;
