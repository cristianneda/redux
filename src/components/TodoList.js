import React, {useEffect, useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import "../styles.css";



function TodoList() {

    
    const[todos, setTodos] = useState([]);


    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos'))
        if(getTodos) {
            setTodos(getTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if(todo.id === id) {
              todo.isComplete = !todo.isComplete
          } 
          return todo 
        })
        setTodos(updatedTodos);
    }

  return (
    <div class="space-y-2">
        <h1 class="flex justify-center text-xl font-bold text-emerald-300 ">Todo's</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
        todos={todos}
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList ;