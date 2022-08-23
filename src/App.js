import axios from 'axios';
import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Pages/Home/Home';
import Quiz from './component/Pages/Quiz/Quiz';
import Result from './component/Pages/Result/Result';
import Image from './ques1.png'
const styles={
  paperContainer:{
    backgroundImage:`url(${Image})`
  }
}

function App() {
  const [name, setName] = useState();
  const [questions,setQuestions]=useState();
  const [score,setScore]=useState(0);

  const fetchQuestions =async(category='',difficulty='')=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setQuestions(data.results);
  }
  return (
    <BrowserRouter>
    <div className="app" style={styles.paperContainer}>
      
      <Header />
      <Routes>
        <Route path='/' excat element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
        <Route path='/Quiz' excat element={<Quiz name={name} setQuestions={setQuestions} questions={questions} score={score} setScore={setScore}/>} />
        <Route path='/Result' excat element={<Result name={name} score={score}/>} />
           
      </Routes>
      
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
