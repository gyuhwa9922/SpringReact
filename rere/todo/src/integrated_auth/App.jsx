import { List, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import Todo from './Todo';
import Addtodo from './Addtodo';
import axios from 'axios';
import { API_BASE_URL } from './api-config'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom'

function App() {
  //Todo 목록리스트
  const [items, setItems] = useState([]);
  const navi = useNavigate();


  //Todo 목록 가져오기(GET 요청)
  useEffect(() => {
    axios({
      method: 'get',
      url: API_BASE_URL + '/todo',
      headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }
    }).then((response) => {
      setItems(response.data.resList);
    })
      .catch((error) => {
        navi("/signin");
        console.log(error);
      });
  }, []);
  //Todo 생성 (POST)
  const addItem = (item) => {
    axios({
      method: 'post',
      url: API_BASE_URL + '/todo',
      data: item,
      headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }
    }).then((response) => {
      setItems(response.data.resList);
    });
  }
  //Todo 수정(PUT 요청)
  const updateItem = (item) => {
    // setItems([...items]);
    axios({
      method: 'put',
      url: API_BASE_URL + '/todo',
      data: item,
      headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }
    }).then((response) => {
      setItems(response.data.resList);
    });
  }

  //Todo 삭제
  const deleteItem = (item) => {

    axios({
      method: 'delete',
      url: API_BASE_URL + '/todo',
      data: item,
      headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }
    }).then(response => setItems(response.data.resList));
  }

  return (
    <div>
      <NavBar />
      <Container maxWidth='md'>
        <Addtodo addItem={addItem} />
        <Paper style={{ margn: 16 }}>
          <List>
            {
              items.map((element, idx) => {
                return <Todo key={element.id}
                  item={element} updateItem={updateItem} deleteItem={deleteItem}
                />
              })
            }
          </List>
        </Paper>
      </Container>
    </div>
  );
}
export default App;