import { Button,TextField,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import './Home.css'
import Category from './Category'
import ErrorMessage  from './ErrorMessage'
import { useNavigate } from "react-router-dom";

const Home = ({name,setName,fetchQuestions}) => {
  const [category,setCategory] =useState("");
  const [difficulty,setDifficulty]=useState('');
  const [error,setError]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=()=>{
    if(!category || !difficulty || !name){
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category,difficulty);
      navigate('./quiz');
    }
  }
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>
    
    
    <div className='settings__select'>
      {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
      <TextField label='Enter Your Name' variant='outlined' style={{marginBottom:'25'}} onChange={(e) => setName(e.target.value)}/>
      <TextField   select label='Select Category' variant='outlined' style={{ marginTop: '20px'}} onChange={(e) => setCategory(e.target.value)}>
        {Category.map((cat)=>(
          <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
        ))}
      </TextField>
      <TextField select label='Select Difficulty' variant='outlined' style={{ marginTop: '20px'}} onChange={(e) => setDifficulty(e.target.value)}>
        <MenuItem key='Easy' value='easy'>
          Easy
        </MenuItem>
        <MenuItem key='Medium' value='Medium'>
          Medium
        </MenuItem>
        <MenuItem key='Hard' value='Hard'>
          Hard
        </MenuItem>
      </TextField>
      <Button variant='contained' color='primary' size='large' style={{marginTop: '20px'}} onClick={handleSubmit}>Start Quiz</Button>
    </div>
    </div>
    <img src='./quiz.svg' alt='quiz img' className='banner'/>
    </div>
  )
}

export default Home