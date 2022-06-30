import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function InputGroup () {
  const [task, setTask] = useState("");
  const addTask = (task) => {
    console.log(task);
  }
  return (
    <div className="input-group justify-content-center">
      <Input task={task} setTask={e => {setTask(e.target.value)}}/>
      <Button className="btn btn-outline-primary" onClick={()=>{addTask(task)}}>ADD</Button>
    </div>
  );
}