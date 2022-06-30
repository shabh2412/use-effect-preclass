import { useEffect, useState } from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";
import TodoList from "./TodoList";


export default function Todo () {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    getTodos();
    // console.log(todos);
  },[page]);
  useEffect(()=>{
    console.log('Todos Updated', todos);
  }, [todos]);
  useEffect(()=>{
    console.log('Page Updated', page);
  }, [page]);
  const getTodos = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
    data = await data.json();
    // console.log(data);
    setTodos(data);
  }
  const handlePage = (value) => {
    setPage(prev => prev + value);
  }
  // console.log(todos);
  // console.log('useEffect X');
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12">
          <InputGroup />
          <h1>Page : {page}</h1>
          <TodoList todos={todos}/>
          <div className="d-flex justify-content-center gap-2">
            <Button disabled={page === 1 ? true : false} onClick={()=>{handlePage(-1)}}>Prev Page</Button>
            <Button disabled={page === 200/10 ? true : false} onClick={()=>{handlePage(1)}}>Next Page</Button>
          </div>
        </div>
      </div>
    </div>
  );
}