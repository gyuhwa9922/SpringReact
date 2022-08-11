import React from 'react';
import {Button, Grid, Paper, TextField} from '@mui/material'
import { useState } from 'react'

function Addtodo(props) {
  // 사용자의 입력을 저장할 오브젝트를 만든다.
  const [item,setItem] = useState({title:''});
  const addItem = props.addItem;

  // 버튼 클릭시 호출 함수
  const onButtonClick = ()=>{
    addItem(item);
    setItem({title:''}); //입력창 초기화
  }

  const onInputChange = (e)=>{
    setItem({title:e.target.value});
  }

  const enterkeyEventHandler=(e)=>{
    if(e.key==='Enter'){
      onButtonClick();
    }
  }
  return (
    <Paper style={{margin:16,padding:30}}>
      <Grid container>
        <Grid item xs={11} md={11} sm={11}>
          <TextField
          placeholder = 'Add text here'
          fullWidth
          value={item.title}
          onChange={onInputChange}
          onKeyPress={enterkeyEventHandler}
          />
        </Grid>
        <Grid item xs={1} md={1} sm={1}>
          <Button color='secondary'
          variant='text'
          style={{height:'100%'}}
          onClick={onButtonClick}>
            <i className="fa-solid fa-folder-plus" style={{fontSize:"2rem"}}></i>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}


export default Addtodo;