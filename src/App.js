import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components"

const Input = ( { todo, setTodo} ) => {

  const [title, setTitle] = useState("")
  const inputRef = useRef(null)

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const newTodo = {
    id: uuidv4(),
    title: title
  }

  const handleAddButton = () => {    
    setTodo([...todo,newTodo]);
    setTitle("");
    inputRef.current.focus();
  }

  return (
    <InputStyle>
      <input type="text" value={title} ref={inputRef} onChange={onChangeTitle}></input>
      <button onClick={handleAddButton}>추가하기</button>
    </InputStyle>
  );
}


const TodoItem = ( { e } ) => {
  return (
    <TodoItemStyle>
      <div>{e.title}</div>
    </TodoItemStyle>
  );
}

const App = () => {

  const todos = [
    {
      id: 1,
      title: "React를 배워봅시다",
    }
  ]

  const [todo,setTodo] = useState(todos)

  return (
    <>
      <AppStyle>
        <Input todo={todo} setTodo={setTodo} />      
        <h1>Todo List</h1>
        <TodoListStyle>
          {todo
          .map((e) =>  {
            return <TodoItem key={e.id} e={e}/>
          })}
        </TodoListStyle>
      </AppStyle>   
    </>   
  );
}

export default App;

const AppStyle = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 50px;
 max-width: 1200px; 
`

const InputStyle = styled.div`
 display: flex;
`

const TodoListStyle = styled.div`
 display: flex;
 flex-wrap: wrap;
`
const TodoItemStyle = styled.div`
 border: 1px solid green;
 margin: 10px;
 width: 200px;
 height: 150px;
 padding: 10px;
 border-radius: 10px;
`