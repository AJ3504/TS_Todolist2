import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";
import { RootState } from "../redux/config/configStore";

export const Form = () => {
  //기존
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (!title || !content) {
      alert("필수값이 누락되었습니다. 확인해주세요!");
      return false;
    }

    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};
