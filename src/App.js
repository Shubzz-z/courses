import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';


import {filterData, apiUrl} from './data.js'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function App() {

  const[courses,setCourses]=useState(null);
  const[category,setCategory]=useState("All");
  
  async function getData(){
    try{
        let output= await fetch(apiUrl);
        let data=await output.json();
        setCourses(data.data);

    }catch(error){
      toast.error("Data load Nahi huaa re baba");
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="App flex flex-col items-center bg-gray-900 w-full min-h-screen gap-6">
      <Header/>
      <Nav filterData={filterData} setCategory={setCategory} category={category}/>
      { courses ? (<Cards data={courses} category={category}/>):(<Spinner/>)}
    </div>
  );
}

export default App;
