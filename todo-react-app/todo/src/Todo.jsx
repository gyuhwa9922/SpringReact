import React from 'react';

function Todo(props) {
  return (
    <div className='Todo'>
      <input type={'checkbox'}
        id={props.item.id}
        name={props.item.name}
        checked={props.item.done}
      />
      <label id={props.item.id}>{props.item.title}</label>
    </div>
  );
}

export default Todo;