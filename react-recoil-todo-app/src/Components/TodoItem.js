import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../TodoAtoms";

const TodoItem = ({ item }) => {
  //useRecoilState를 사용하여 Atom을 읽고 업데이트할 준비
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // 현재 등록 된 배열 데이터의 index값을 알아내기 위한 식
  const index = todoList.findIndex((listItem) => listItem === item);

  // 수정함수
  // { target: { value } } : 구조분해할당문법으로써 e.target.value동일
  // 기존 배열, 현재 배열의 index값, 기존 item을 스프레드문법으로 작성 후 새롭게 받은
  // value값으로 덮어씌어서 replaceItemIndex 인자로 전달 함수호출
  // newList로 받아서 todoList에 Update
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  // input수정과 동일하게 이미 객체데이터 내부에 잇는 isComplete 변경해주는 것으로 replaceItemIndex함수 사용
  const toggleItemCompletion = () => {
    const newList = replaceItemIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

// 새로운 배열을 반환하는 slice 메서드를 사용하여 새로운 배열반환
// 데이터 변화가 이뤄진 item이 매개변수로 다시 오기 때문에 해당 input에 맞는 index값을 구할 수 있음
// 배열의 index 전까지(변경전value값)qusru만 잘라서 반환, 새로운값, 배열의 index+1 부터 전체(새로운value이후)
const replaceItemIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export default TodoItem;
