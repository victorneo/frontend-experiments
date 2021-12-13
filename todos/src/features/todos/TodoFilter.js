import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ALL, COMPLETED_ONLY, INCOMPLETE_ONLY, changeFilter } from "./todoSlice";
import './TodoFilter.css';

const TodoFilter = () => {
    const currFilter = useSelector((state) => state.todos.currFilter);
    const dispatch = useDispatch();

    const changeCurrFilter = (filter) => {
        console.log(filter);
        dispatch(changeFilter({filter: filter}));
    };

    return (
        <div>
            <span>Show only: </span>
            <Button variant="link" onClick={() => changeCurrFilter(ALL)} className={currFilter === ALL ? 'selectedFilter' : null}>All</Button>
            <Button variant="link" onClick={() => changeCurrFilter(INCOMPLETE_ONLY)} className={currFilter === INCOMPLETE_ONLY ? 'selectedFilter' : null}>Incomplete</Button>
            <Button variant="link" onClick={() => changeCurrFilter(COMPLETED_ONLY)} className={currFilter === COMPLETED_ONLY ? 'selectedFilter' : null}>Completed</Button>
        </div>
    );
};

export default TodoFilter;