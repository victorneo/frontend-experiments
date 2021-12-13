import './TodoList.css';
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { COMPLETED_ONLY, INCOMPLETE_ONLY, markAsDone } from "./todoSlice";

const TodoItem = (props) => {
    const handleClick = (e) => {
        if (e.target.tagName === 'LI') {
            props.markAsDone(e.target.children[0].children[0].value)
        }
        else if (e.target.tagName === 'SPAN') {
            props.markAsDone(e.currentTarget.children[0].children[0].value)
        }
        else if (e.target.tagName === 'INPUT') {
            props.markAsDone(e.currentTarget.children[0].children[0].value)
        }
    }

    return (
        <li className="checkable" onClick={handleClick}>
            <Form.Check type="checkbox" value={props.todo.id} checked={props.todo.done} onChange={handleClick} />
            <span className={props.todo.done ? 'completed' : ''}>{props.todo.todo}</span>
        </li>
    );
}

const TodoList = (props) => {
    const currFilter = useSelector((state) => state.todos.currFilter);
    const TodoSelector = (state) => {
        let f;

        if (currFilter === INCOMPLETE_ONLY) {
            f = (todo) => !todo.done;
        }
        else if (currFilter === COMPLETED_ONLY) {
            f = (todo) => todo.done;
        }

        if (f) {
            return state.todos.todos.filter(f);
        }
        else {
            return state.todos.todos;
        }
    }

    const todos = useSelector(TodoSelector);
    const dispatch = useDispatch();

    const markTodoAsDone = (id) => {
        dispatch(markAsDone({id: id}))        
    };

    return (
        <ul className="todo-list">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} markAsDone={markTodoAsDone} />
            })}
        </ul>
    );
};

export default TodoList;