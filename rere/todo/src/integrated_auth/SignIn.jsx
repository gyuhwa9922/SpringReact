import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { API_BASE_URL } from './api-config';
import { Link, useNavigate } from 'react-router-dom'


function SignIn(props) {

  const navi = useNavigate();

  function signin(userDTO) {
    axios({
      method: 'post',
      url: API_BASE_URL + "/auth/signin",
      data: userDTO
    }).then((response) => {
      // alert(response.data.token);
      if (response.data.token) {
        localStorage.setItem("ACCESS_TOKEN", response.data.token);
        //토큰이 존재하는 경우 TODO 화면으로 리디렉트
        navi("/");
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signin({ username: username, password: password });
  }

  return (
    <Container component={'main'} maxWidth="xs" style={{ marginTop: '8%' }}>
      <Grid Container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12}>
          <Typography component={"h1"} variant='h5'>
            <span>로그인</span>
            <i className="fa-solid fa-key" style={{ marginLeft: '10px', color: '#ccc' }}></i>
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
              로그인
            </Button>
          </Grid>
          <Grid item xs ={12}>
          <Link to={"/signup"} variant="body2" style={{textDecoration:'none',color:'steelblue'}}> 
          <i className="fa-solid fa-bell" style={{color:'crimson', marginRight:'5px'}}></i>
          <span >계정이 없으십니까?</span>
          </Link>
          </Grid>
        </Grid>
      </form>

    </Container>
  );
}

export default SignIn;