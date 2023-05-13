import { createContext, useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //READ data from firestore
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onSnapshot(
            query(collection(db, "todos")),
            snapshot => {
                const todosArr = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTodos(todosArr);
                setIsLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);

    //CREATE Todo
    const handleAdd = async event => {
        event.preventDefault();
        if (!todoText.trim()) return;
        await addDoc(collection(db, "todos"), {
            text: todoText,
            completed: false,
        });
        setTodoText("");
    };
    return (
        <AppContext.Provider
            value={{ todos, handleAdd, todoText, setTodoText, isLoading }}
        >
            {children}
        </AppContext.Provider>
    );
};
