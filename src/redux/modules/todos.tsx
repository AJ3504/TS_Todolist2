import TodosState, { Todo } from "./todosState";

//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//action creator
export const addTodo = (newTodo: Todo) => {
  return { type: ADD_TODO, newTodo };
};
export const deleteTodo = (todoId: string) => {
  return { type: DELETE_TODO, todoId };
};
export const toggleStatusTodo = (todoId: string) => {
  return { type: TOGGLE_STATUS_TODO, todoId };
};

// initialState
const initialState: Todo[] = TodosState;

// 리듀서에서 사용하는 액션 타입 정의
// action은 리덕스에서 생성된 액션 객체 -> { type: string, ... }와 같은 구조를 지님 + type은 액션의 타입을 구분하기 위한 필드이고, 나머지 필드들은 해당 액션에 필요한 데이터를 담고있음
interface Action {
  type: string;
  [key: string]: any; // action 객체의 타입을 정의할 때 type 필드를 반드시 포함하고, 그 외에는 어떤 키와 값이 들어와도 상관없다는 의미
}

//reducer
const todos = (state = initialState, action: Action) => {
  switch (action.type) {
    //
    case ADD_TODO:
      return [...state, action.newTodo];

    //
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.todoId);

    //
    case TOGGLE_STATUS_TODO:
      return state.map((item) => {
        if (item.id === action.todoId) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
