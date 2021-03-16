import React, { useState, FC } from "react";
import "./App.css";
import { v4 } from 'uuid';
import Modal from "react-modal";

const App: FC = () => {
  const [tasks, setTasks] = useState(new Array<Todo>());
  const [current, setCurrent] = useState({ title: "", description: "" });
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent({
      title: event.currentTarget.value,
      description: current.description
    });
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrent({
      title: current.title,
      description: event.currentTarget.value
    });
  };

  const handleDelete = (id: string) => {
    const task_list = [...tasks];
    const index = task_list.findIndex((ta) => ta.id === id);

    task_list.splice(index, 1);

    setTasks(task_list);
  };

  const handleModifyTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const task_list = [...tasks];
    const tad = task_list.find((ta) => ta.id === id);

    tad!.title = event.currentTarget.value;
    setTasks(task_list);
  };

  const handleModifyDesc = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const task_list = [...tasks];
    const tad = task_list.find((ta) => ta.id === id);

    tad!.description = event.currentTarget.value;
    setTasks(task_list);
  };

  const handleModifyDone = (id: string) => {
    const task_list = [...tasks];
    let tad = task_list.find((ta) => ta.id === id);

    tad!.isDone = !tad!.isDone;
    setTasks(task_list);
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (current.title.length <= 0) return;
    if (current.description.length <= 0) return;
    const task_list = [...tasks];
    const task = {
      title: current.title,
      description: current.description,
      createdAt: new Date().toLocaleDateString().toString(),
      id: v4(),
      isDone: false
    };
    task_list.push(task);
    setTasks(task_list);
    setCurrent({ title: "", description: "" });
  };

  return (
    <React.Fragment>
      <h1 className="title_1">To Do List</h1>
      {tasks.map(function (task) {
        return (
          <div className="input-group">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                checked={task.isDone}
                onChange={() => handleModifyDone(task.id)}
                aria-label="Radio button for following text input"
              />
            </div>
            <i className="fas fa-pen-square lab-img"></i>
            <input
              type="text"
              className={
                task.isDone
                  ? "form-control barred bigtitle"
                  : "form-control bigtitle"
              }
              aria-label="Text input with radio button"
              value={task.title}
              onChange={(e) => handleModifyTitle(e, task.id)}
            />
            <i className="fas fa-file-alt lab-img"></i>
            <input
              type="text"
              className={task.isDone ? "form-control barred" : "form-control"}
              aria-label="Text input with radio button"
              value={task.description}
              onChange={(e) => handleModifyDesc(e, task.id)}
            />
            <button className="btn-delete" onClick={() => handleDelete(task.id)}><i className="fas fa-times-circle"></i></button>
            <button className="btn-detail" onClick={openModal}><i className="fas fa-info-circle"></i></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="modal_1"
            >
              <div className="modal_close">
                <button onClick={closeModal}><i className="fas fa-times-circle"></i></button>
              </div>
              <p>Id: {task.id}</p>
              <p>Title: {task.title}</p>
              <p>Description: {task.description}</p>
              <p>Created: {task.createdAt}</p>
              <p>isDone: {task.isDone ? "true" : "false"}</p>
            </Modal>
          </div>
        );
      })}
      <form className="forms" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={current.title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="Title"
          className="title-input"
        />
        <input
          value={current.description}
          onChange={handleChangeDescription}
          placeholder="Description"
        />
        <button className="btn-enter"><i className="fas fa-check-square"></i></button>
      </form>
    </React.Fragment>
  );
};

export default App;