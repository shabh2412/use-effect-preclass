import TodoItem from "./TodoItem";

export default function TodoList ({todos=[]}) {
  return (
    todos.length === 0 ? 
      <div>Loading Your TodoList...</div> 
      : 
      <div className="row">
        {todos.map(({id,title,completed}) => (
          <div className="col-12 border my-2 py-2" key={id}>
            <TodoItem title={title} completed={completed}/>
          </div>
          ))
        }
      </div>
  );
}