import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { RootState } from "../redux/config/configStore";

export const Lists = () => {
  //
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  //
  const changeStatusHandler = (todoId: string) => {
    dispatch(toggleStatusTodo(todoId));
  };

  const deleteStatusHandler = (todoId: string) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <div className="working">
        <h2>Working🔥</h2>
        <div className="working-container">
          {todos
            .filter((todo) => todo.isDone === false)
            .map(function (todo) {
              return (
                <div key={todo.id}>
                  <h5>{todo.title}</h5>
                  <br />
                  <p>{todo.content}</p>
                  <br />
                  <p>완료여부: {todo.isDone.toString()}</p>
                  <button onClick={() => changeStatusHandler(todo.id)}>
                    완료
                  </button>
                  <button onClick={() => deleteStatusHandler(todo.id)}>
                    삭제
                  </button>

                  <Link to={`/${todo.id}`}>상세보기</Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className="done">
        <h2>Done🎉</h2>
        <div className="done-container">
          {todos
            .filter((todo) => todo.isDone === !false)
            .map(function (todo) {
              return (
                <div key={todo.id}>
                  <h5>{todo.title}</h5>
                  <br />
                  <p>{todo.content}</p>
                  <br />
                  <p>완료여부: {todo.isDone.toString()}</p>
                  <button onClick={() => changeStatusHandler(todo.id)}>
                    완료취소
                  </button>
                  <button onClick={() => deleteStatusHandler(todo.id)}>
                    삭제
                  </button>
                  <Link to={`/${todo.id}`}>상세보기</Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
