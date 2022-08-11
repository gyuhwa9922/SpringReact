import { ListItemText, Checkbox, InputBase, ListItem, ListItemSecondaryAction, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { DeleteOutlined } from '@mui/icons-material'


function Todo(props) {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const updateItem = props.updateItem;
  const deleteItem = props.deleteItem;
  
  //todo 삭제
  const deleteEventHandler = () => {
    deleteItem(item);
  }
  //체크박스
  const checkboxEventHandler = (e)=>{
    item.done = e.target.checked;
    updateItem(item);
  }
  const turnOnReadOnly = (e) =>{
    if(e.key ==="Enter"){
      setReadOnly(true);
    }
  }
  // 쓰기 설정
  const turnOffReadOnly = () =>{
    setReadOnly(false);
  }
  //입력
  const updateEventHandler = (e) =>{
    let update = {...item, title:e.target.value};
    setItem(update);
    updateItem();
  }
  //todo 수정
  return (
    <ListItem>
      <Checkbox checked={item.done}  onChange ={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ readOnly: readOnly }}
          onClick={turnOffReadOnly}
          onKeyDown = {turnOnReadOnly}
          onChange = {updateEventHandler}
          type='text'
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          spellCheck={false}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo;