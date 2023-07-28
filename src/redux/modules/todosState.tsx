import shortid from "shortid";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

// initialState의 타입을 Todo[]로 지정
// Todo[]는 'Todo'라는 객체로 구성된 배열
const TodosState: Todo[] = [
  {
    id: shortid.generate(),
    title: "YET",
    content: "not yet",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "DONE",
    content: "already done",
    isDone: true,
  },
];

export default TodosState;
