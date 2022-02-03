import axios from 'axios';
import { useCallback, useState } from 'react';
import React from "react";
import "../css/taskbook.css";
import {FcApproval,FcHighPriority} from "react-icons/fc";

const  Tagbook =(e)=>{

    const [taskbook_name,settaskbook_name]=useState("")
    const [taskkbook_name_verif,settaskbook_name_verif]=useState()

    const data =(e)=>{

        settaskbook_name(e.target.value)

    }

    const conform =()=>{

        if(taskbook_name==""){

            settaskbook_name_verif(<div className='error'> <FcHighPriority size={15}/>takbook can't be empty</div>)

        }else{

            settaskbook_name_verif(<div className='verified'><FcApproval size={15}/>taskbook verified</div>)


            
            const d=new Date()

            const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

            const data={

                "taskbook_name":taskbook_name,
                "Day":d.getDay()-1,
                "Date":day[d.getDate()],
                "Month":d.getMonth()+1,
                "Years":d.getFullYear(),
                "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds()

            }

            const config={
                Headers:{
                    "Content-Type":"application/json"
                }
            }

        
            axios.post("http://localhost:8000/data/insert/taskbook",data,config)

            window.location.reload()
        
            }

       

    }


    return(

        <div className="taskbook" >
            <form>

                <div id="taskbook_content" >

                    <div class="text_tag">

                        <input type="email"  class="form-control" id="exampleInputEmail1" placeholder="Taskbook" onChange={data} name="taskbook_name"aria-describedby="emailHelp" />
                    
                    </div>


                    <div>

                        <button type="button" class="btn btn-outline-secondary" onClick={conform}>ok</button>

                    
                    </div>
                 
                </div>

            
                <div>{taskkbook_name_verif}</div>

            </form>
        </div>


    )

}

export default Tagbook;