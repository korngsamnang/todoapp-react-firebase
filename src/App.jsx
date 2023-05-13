import AddTodo from "./components/AddTodo";
import { AppProvider } from "./context/AppProvider";
import TodoList from "./components/TodoList.jsx";

const App = () => {
    return (
        <AppProvider>
            <main className="min-h-screen bg-sky-600 overflow-hidden p-4">
                <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
                    <header className="text-3xl text-center mb-3">
                        <h1>Todo App</h1>
                    </header>
                    <AddTodo />
                    <TodoList />
                </div>
            </main>
        </AppProvider>
    );
};

export default App;
