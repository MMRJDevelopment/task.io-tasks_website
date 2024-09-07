import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const Taskboard = () => {
  const dufaultTaskData = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTask] = useState([dufaultTaskData]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpDate, setTaskToUpDate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
  }

  function hendleEditTask(task) {
    setTaskToUpDate(task);
    setShowAddModal(true);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal 
        onSave={handleAddTask} 
        taskToUpDate={taskToUpDate} />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={() => hendleEditTask()} />
        </div>
      </div>
    </section>
  );
};

export default Taskboard;
