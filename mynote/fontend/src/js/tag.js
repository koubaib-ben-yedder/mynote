import axios from 'axios';
import { useCallback, useState } from 'react';
import "../css/tag.css";
import React from 'react';
import { FcApproval,FcHighPriority} from 'react-icons/fc';
const  Tag =()=>{



    const [tag_name,settag_name]=useState("")
    const [list,setlist]=useState([])
    const [tagbook,settagbook]=useState("")
    const [tag_name_verif,settag_name_verif]=useState(<></>)
    const [tagbook_verif,settagbook_verif]=useState(<></>)

    const data =useCallback(e=>{

        if(e.target.name=="tag_name"){
            
            settag_name(e.target.value)

        }else{

            if(e.target.name=="tagbook"){
                settagbook(e.target.value)
            }
        }


    
    },[tag_name,tagbook])




    const  fetch =useCallback(()=>{

     

        const config={

            Headers:{

                "Content-Type":"application/json"
            }
           
        }
       
 

            
        axios.get("http://localhost:8000/data/fetch/tagbook",config)

        .then(res=>{

             setlist(res.data.array)
          

        }).catch((err)=>{

         console.error(err)
        })

           
       
    },[list])

    const conform =useCallback(()=>{


       

        if(tag_name==""){

            settag_name_verif(<div className='error' > <FcHighPriority size={15}/>tag  can't be empty</div>)

            
        }else{

            if(tagbook==""){
                settag_name_verif(<div> </div>)
                settagbook_verif(<div className='error'> <FcHighPriority size={15}/>tagbook can't be empty</div>)
            }else{

                settagbook_verif(<div className='verified'><FcApproval size={15}/>tagbook is verified</div>)
                settag_name_verif(<div className='verified'><FcApproval size={15}/> tag name is verified </div>)



                const  d=new Date()

                const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        
               
                const data={
         
                     "tag_name":tag_name,
                     "Day":day[d.getDay()],
                     "Date":d.getDate(),
                     "Month":d.getMonth()+1,
                     "Years":d.getFullYear(),
                     "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds(),
                     "tagbook":tagbook
         
                }
         
         
         
                axios.post("http://localhost:8000/data/insert/tags",data)


                window.location.reload()
            }
        
        }


      


        



        
    },[tag_name,tagbook])


    return(

        <div className="tag" >

            <form>

                <div className="content-tag" >

                    <div class="text-tag">

                        <input type="email"  class="form-control" id="exampleInputEmail1" placeholder="Tag" name="tag_name" onChange={data} aria-describedby="emailHelp" />
                        {tagbook_verif}
                        {tag_name_verif}
                    </div>


                    <div>

                        <select onClick={fetch} onChange={data}  name="tagbook" class="btn btn-outline-secondary"  >

                                <option> select Tagbook</option>
                           
                                 {  
                                        
                                        list.map((value,index)=>(

                                           


                                            <option key={index}>  {value.content}</option>

                                       


                                        ))
                                }

                               
            

                        </select>

                        <button type="button" class="btn btn-outline-secondary" onClick={conform}>create tag</button>

                    </div>

                </div>

            
                
            </form>
        </div>


    )

}

export default Tag;