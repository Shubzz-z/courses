import React, { useState } from 'react'
import Card from './Card';

function Cards(probs) {

    const[likedCourses,setLikedCourses]=useState('');
    let courses=probs.data;
    let CourcesData=[];
    let category=probs.category;

    if(category==="All"){
        Object.values(courses).forEach(array=>{
            array.forEach(value=>{
                CourcesData.push(value);
            })
        })
    }else{
        courses[category].forEach((value)=>{
            CourcesData.push(value);
        })
    }

  return (
    <div className=' max-w-[900px] flex flex-wrap gap-4 justify-center m-4'>
        {
            CourcesData.map((value)=>{
                return<Card key={value.id} value={value} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })
        }
    </div>
  )
}

export default Cards