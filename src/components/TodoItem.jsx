import Button from "./Button";

export default function TodoItem ({title, completed}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="fs-6 mb-0">{title}</p>
      <Button className={completed ? "btn btn-success" : "btn btn-warning"}>{completed ? "Completed" : "Doing"}</Button>
    </div>
  );
}