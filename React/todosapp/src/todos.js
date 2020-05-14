import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    //console.log(todos);
       
    const todosList = todos.map(todo => {
            return (
                <div className="todo collection-item" key={todo.id}>
                    <div><input type="button" onClick={ () => {deleteTodo(todo.id)} } /> &nbsp; {todo.desc}</div>
                </div>
            );
        }
    );

    if (todos.length > 0)
        return (
            <div className="Todos collection">
                {todosList}
            </div>
        );
    else
        return (
            <p className="center">no todos left</p>
        );
}

export default Todos;