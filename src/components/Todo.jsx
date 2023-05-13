import { useState } from "react";
import { FiEdit, FaTrashAlt } from "react-icons/all";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const Todo = ({ todo }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    //UPDATE Todo
    const handleEdit = async id => {
        if (editMode) {
            await updateDoc(doc(db, "todos", id), { text: editedText });
        }
        setEditMode(prevState => !prevState);
    };

    const handleCheck = async todo => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed,
        });
    };

    //DELETE Todo
    const handleDelete = async id => {
        await deleteDoc(doc(db, "todos", id));
    };

    return (
        <div
            className={`my-1 p-2 flex justify-between items-center ${
                todo.completed ? "bg-stone-400 " : "bg-stone-200 "
            }`}
        >
            <div className="flex items-center">
                <input
                    className="w-5 h-5 text-center cursor-pointer"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheck(todo)}
                />
                {editMode ? (
                    <input
                        type="text"
                        autoFocus
                        value={editedText}
                        onChange={event => setEditedText(event.target.value)}
                        onBlur={() => handleEdit(todo.id)}
                        className={`ml-1 focus:outline-black ${
                            todo.completed ? "bg-stone-400 " : "bg-stone-200 "
                        }`}
                    />
                ) : (
                    <label
                        className="ml-1"
                        onDoubleClick={() => handleCheck(todo)}
                        style={
                            todo.completed
                                ? {
                                      textDecoration: "line-through",
                                  }
                                : {}
                        }
                    >
                        {todo.text}
                    </label>
                )}
            </div>
            <div className="flex items-center">
                <button
                    className="m-1 text-xl"
                    onClick={() => handleEdit(todo.id)}
                >
                    <FiEdit />
                </button>
                <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-xl"
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default Todo;
