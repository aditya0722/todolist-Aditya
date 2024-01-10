"use client"

import React, { useState } from "react";

const Page = () => {
  const [todo, setTodo] = useState(""); 
  const[arrlist,setarrlist]=useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    if(todo!==''){
    console.log("Todo submitted:", todo);
    setarrlist([...arrlist,todo])
    console.log(arrlist,todo);
    setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);

    
  };

  const renderTast=arrlist.map((text,index)=>{
const deleterender=()=>{
    let copytask= [...arrlist];
    copytask.splice(index,1);
    setarrlist(copytask);
}
    return <>
      <div className=" bg-slate-950 text-white h-10 w-full my-5 flex justify-between items-center rounded">
      <span className="text-white text-center mx-6">{text}</span>
        <button className="bg-red-800 h-8 w-20 border-x-orange-50 border-y-orange-50 rounded mx-5" value="Delete" onClick={()=>{
          deleterender();
        }}>Delete</button>
      </div>
    </>

  });

  return (
    <div className="h-screen w-full flex flex-col justify-center bg-slate-700 p-56">
      <div className="h-11 w-4/5">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="add to to-do list"
            className="rounded w-3/4 p-2"
            value={todo}
            onChange={handleChange}
          />
          <input type="submit" value="submit" className="p-2 w-32 border-x rounded mx-3 border-y " />
        </form>
      </div>
      <div className=" text-white h-auto w-3/5 my-5 ">
      
      {renderTast}
      </div>
    </div>
  );
};

export default Page;
