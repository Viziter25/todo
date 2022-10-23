import React, {ChangeEvent} from 'react';

type PropsType = {
  checked:boolean
  callback:(isDone:boolean)=>void
}

export const Checkbox = (props:PropsType) => {

  const onchangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    props.callback(event.currentTarget.checked)
  }
  return (
    <input type="checkbox" checked={props.checked} onChange={onchangeHandler}/>
    // <input type="checkbox" checked={t.isDone} onChange={(event)=>onchangeHandler(t.id,event.currentTarget.checked)}/>
  );
};
