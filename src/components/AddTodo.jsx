import { FaPlus } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";

const AddTodo = () => {
    const { handleAdd, todoText, setTodoText } = useContext(AppContext);
    return (
        <form className="flex" onSubmit={handleAdd}>
            <input
                type="text"
                placeholder="Add todos..."
                autoFocus
                className="w-full p-2"
                value={todoText}
                onChange={event => setTodoText(event.target.value)}
            />
            <button
                type="submit"
                className="px-3.5 py-2 bg-sky-600 ml-2"
                onClick={handleAdd}
            >
                <FaPlus />
            </button>
        </form>
    );
};

export default AddTodo;
