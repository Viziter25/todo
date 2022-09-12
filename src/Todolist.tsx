import React from "react";

type TitleProps = {
  title: string,
  tomatos? : number,
  tasks : Array<TasksType>
}

type TasksType = {
  id: number,
  title: string,
  isDone: boolean
  newValue : boolean;
}

export const Todolist = (props: TitleProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((task,index) => {
          return (
            <li>{index+1}<input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
          )
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}