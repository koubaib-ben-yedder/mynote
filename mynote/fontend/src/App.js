import Content from "./js/content";
import Functionality from "./js/functionality";
import React  from 'react';
import {Route,Routes} from "react-router-dom";
import Note from "./js/note";
import Notebook  from "./js/notebook";
import Task from "./js/task";
import Tag from "./js/tag";
import Tagbook from "./js/tagbook";
import Taskbook from "./js/taskbook";



const App =()=> {
  return (
    <div className="App">
    

  
      <Functionality/>

   
         
      <Routes> 

        <Route path ="/tag" element={<Tag />}/>


       </Routes> 

       <Routes> 

         <Route index path ="/" element={<Content />}/>


      </Routes> 


        <Routes> 

            <Route path ="/note"  element={<Note />}/>


        </Routes>

        <Routes> 

            <Route path ="/notebook" element={<Notebook />}/>


        </Routes> 

        <Routes> 

            <Route path ="/task" element={<Task />}/>


        </Routes> 

        <Routes> 

            <Route path ="/tagbook" element={<Tagbook />}/>


        </Routes> 

        <Routes> 

          <Route path ="/taskbook" element={<Taskbook/>}/>


        </Routes> 

        <Routes> 

         <Route path ="/home" element={<Content />}/>


        </Routes> 

    </div>
  );
}
export default App;
