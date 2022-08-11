import React from 'react';
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import { useState } from 'react';

function AddTodo(props) {
  //사용자로부터 입력을 저장할 오브젝트
  const [item, setItem] = useState({ title: '' });
  const addItem = props.addItem;

  return (
    <Paper style={{margin:16, padding:30}}>
      <Grid container>
        <Grid item xs={11} md={11} style={{paddingRight:16}}>
          <TextField
          placeholder='Add Todo here'
          fullWidth value={item.title}
          />
        </Grid>
        <Grid item xs={1} md={1}>
          <Button color='secondary' variant='outlined' fullWidth style={{height : '100%'}}>+</Button>
        </Grid>
      </Grid>
    </Paper>
    
  );
}

export default AddTodo;