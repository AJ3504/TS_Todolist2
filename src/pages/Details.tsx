import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../redux/modules/todosState";

const Details = () => {
  const { todoId } = useParams();

  const navigate = useNavigate();

  const todos = useSelector((state: RootState) => state.todos);

  const todo: Todo | undefined = todos.find((todo: Todo) => todo.id === todoId); //todos.find()의 결과값이 todo 혹은 undefined이기 때문에, undefined인 경우에 대한 타입 + 로직을 추가해주어야 함

  if (!todo) {
    return <div>Todo not found</div>;
  }

  //
  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.content}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
    </div>
  );
};

export default Details;
