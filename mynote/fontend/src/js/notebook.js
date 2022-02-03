import React from "react";
import "../css/notebook.css";
import axios from "axios";
import { useState, useCallback } from 'react';
import { FcApproval,FcHighPriority } from "react-icons/fc";
const Notebook =()=>{

    const [notebook_name,setnotebook_name]=useState("")
    const [notebook_name_verif,setnotebook_name_verif]=useState(<></>)


   const data =(e)=>{

        setnotebook_name(e.target.value)

       

      
        
    }

    const conform =()=>{


        if(notebook_name==""){

            setnotebook_name_verif(<div className="error"> <FcHighPriority size={15}/> notebook can't be enpty </div>)
            
        }else{

            const  d=new Date()

            setnotebook_name_verif(<div className="verified"> <FcApproval size={15}/>notebook id verified</div>)

            const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      
            const data={
    
                "notebook_name":notebook_name,
                "day":d.getDay()-1,
                "Date":day[d.getDate()],
                "month":d.getMonth()+1,
                "Years":d.getFullYear(),
                "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds()
    
            }

            const config={
                Headers:{
                    "Content-Type":"application/json"
                }
            }
    
          
    
            axios.post("http://localhost:8000/data/insert/notebook",data,config)

            window.location.reload()
          
        }
       

        

    }



    return(
        <div className="notebook" >
           <form>

                <div id="content" >

                    <div class="text_notebook">

                        <input type="email"  class="form-control" id="exampleInputEmail1" name="notebook_name" onChange={data} placeholder="Notebook" aria-describedby="emailHelp" />
                   
                    </div>


                    <div>

                        <button type="button" class="btn btn-outline-secondary" onClick={conform}>ok</button>

                      

                  </div>
                 

                </div>

                <div> {notebook_name_verif}</div>
               
            </form>
        </div>
    )

}
export default Notebook;