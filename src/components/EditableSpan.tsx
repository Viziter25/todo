import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
  title: string
  callback: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
  let [newTitle, setNewTitle] = useState(props.title)
  const [edit, setEdit] = useState(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)

  }

  const onDoubleClickHandler = () => {
    setEdit(!edit)
    props.callback(newTitle)
  }

  return (
    edit
      ? <input value={newTitle} autoFocus onBlur={onDoubleClickHandler} onChange={onChangeHandler}/>
      : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
  );
};
