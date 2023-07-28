import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import TodosState from "../modules/todosState";

export interface RootState {
  todos: typeof TodosState;
}

// <RootState> 제네릭을 사용하여, 각 리듀서들의 상태 타입을 'RootState'에 합침 -> 이 combineReducers 함수 사용 시에, 리듀서들의 상태 타입을 명확히 명시
const rootReducer = combineReducers<RootState>({
  todos: todos,
});
const store = createStore(rootReducer);

export default store;
