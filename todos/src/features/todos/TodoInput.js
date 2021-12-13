import './TodoInput.css';
import { Button, Form } from "react-bootstrap";
import { addTodo, updateCurrTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoInput = (props) => {
    const currTodo = useSelector((state) => state.todos.currTodo);
    const dispatch = useDispatch();
    const addTodoItem = () => {
        const input = document.getElementById('todo-input');
        if (input.value && input.value.trim()) {
            dispatch(addTodo({todo: currTodo}));
        }
    };

    const handleChange = (e) => {
        dispatch(updateCurrTodo(e.target.value));
    };

    return (
        <div className="todo-form">
            <Form.Control id="todo-input" type="text" value={currTodo} onChange={handleChange} placeholder="Add new todo" />
            <Button onClick={addTodoItem}>Add</Button>
        </div>
    );
}

export default TodoInput;