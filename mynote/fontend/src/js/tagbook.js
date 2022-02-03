import { useCallback, useState } from 'react';
import React  from 'react';
import "../css/tagbook.css";
import axios from "axios";
import { FcHighPriority,FcApproval } from 'react-icons/fc';

const  Tagbook =()=>{




    const [tagbook_name,settagbook_name]=useState("")
    const [tagbook_name_verif,settagbook_name_verif]=useState(<></>)

    const data =(e)=>{

        settagbook_name(e.target.value)

        console.log(tagbook_name)

    }

    const conform =()=>{



        if(tagbook_name!=""){

            const d=new Date()

            const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
     
             const data={
     
                   "tagbook_name":tagbook_name,
                    "Day":d.getDay()-1,
                    "Date":day[d.getDate()],
                    "Month":d.getMonth()+1,
                    "Years":d.getFullYear(),
                    "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds()
     
     
            }

            settagbook_name_verif(()=><div className='verified'><FcApproval size={15}/> tagname is verified</div>)

            const config={
                Headers:{
                    "Content-Type":"application/json"
                }
            }

           
            axios.post("http://localhost:8000/data/insert/tagbook",data,config)

            window.location.reload()
     
           
        }else{
            settagbook_name_verif(()=><div className='error'> <FcHighPriority size={15}/>Tagname can't be empty</div>)
          
        }


    

   
    }


    return(

        <div className="tagbook" >
            <form>

                <div id="tagbook_content" >

                    <div class="text_tag">

                        <input type="email"  class="form-control" id="exampleInputEmail1" placeholder="tagbook" name="tagbook_name" onChange={data}  aria-describedby="emailHelp" />
                        {tagbook_name_verif}    
                    </div>


                    <div>

                        <button type="button" class="btn btn-outline-secondary" onClick={conform}>ok</button>

                    </div>

                </div>

            
                
            </form>
        </div>


    )

}

export default Tagbook;