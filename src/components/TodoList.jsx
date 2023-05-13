import Todo from "./Todo";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";

const TodoList = () => {
    const { todos, isLoading } = useContext(AppContext);
    return (
        <div>
            {!isLoading ? (
                <div>
                    {todos?.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                    {todos.length > 0 ? (
                        <p className="text-center pt-2">
                            You have {todos?.length} todos
                        </p>
                    ) : (
                        <p className="text-center pt-4">No notes to display</p>
                    )}
                </div>
            ) : (
                <p className="text-center pt-4">Loading...</p>
            )}
        </div>
    );
};

export default TodoList;
