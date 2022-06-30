

export default function Input({task, setTask, name="taskInput", placeholder="Write Something"}) {
  return (
    <div className="form-floating w-75">
      <input value={task} onChange={setTask} type="text" placeholder={placeholder} name={name} className="form-control"/>
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
}