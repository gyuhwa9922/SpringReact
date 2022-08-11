import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './api-config';

function SignUp(props) {
  let navi = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signup({ username: username, password: password });
  }

  function signup(userDTO){
    axios({
      method:'post',
      url:API_BASE_URL + "/auth/signup",
      data:userDTO,
    }).then((response) =>{
      //계정 생성 성공 시 signin으로 가야함(리디렉트)
      navi("/signin");
    });
  }

  return (
    <Container component={'main'} maxWidth="xs" style={{ marginTop: '8%' }}>
      <Grid Container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12}>
          <Typography component={"h1"} variant='h5'>
            <span>계정생성</span>
            <i className="fa-solid fa-user-pen"style={{marginLeft:'10px', color:'#ccc'}}></i>
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='username'
              name='username'
              label='아이디'
              autoComplete='username'
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              type='password'
              id='password'
              name='password'
              label='비밀번호'
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              회원가입
            </Button>
          </Grid>
          <Grid item xs ={12}>
          <Link to={"/signin"} variant="body2" style={{textDecoration:'none',color:'steelblue'}}> 
          <i className="fa-solid fa-bell" style={{color:'crimson', marginRight:'5px'}}></i>
          <span >이미 회원이십니까?</span>
          </Link>
          </Grid>
        </Grid>
      </form>

    </Container>
  );
}

export default SignUp;