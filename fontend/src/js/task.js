import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../css/task.css";
import { GrClose,GrView } from "react-icons/gr";
import {useCallback,  useEffect,  useState} from "react";
import Add  from "./add.js";
import React  from 'react';
import axios from 'axios';

const Task =()=>{


    const [list,setlist] = useState([{}])


    const [add,setadd]=useState(<></>)    


    const deleat =useCallback((index,value)=>{
      
       setlist(list.filter((value,i)=>i!=index))
     


       const config={

            Headers:{
                "Content-Type":"application/json"
            }

        }

    
           
        axios.delete("http://localhost:8000/data/delete/tasks/"+value.id,config)
        
    },[list])

 
  




    const fetch =()=>{

        const  config={

            Headers:{
                "Content-Type":"application/json"

            }
        }
        axios.get("http://localhost:8000/data/fetch/tasks",config)
        .then(responde=>{
            setlist(responde.data.array)
         
        })
    }

    useEffect(()=>{

        fetch()
    },[])


    return(



            <div className='task'>

               

                        <Button className="add" variant="outline-secondary" onClick={()=>add==<></>?setadd(<></>):setadd(<Add index={-1}  />)}>add task</Button>

                        <div className="pop_add">{add}</div>


                       
                {

                    


                        list!=[{}]?list.map((value, idx) => (

                            <div className="list"> 
                           
                                    <Card 
        
                                        key={idx}
                                        style={{ width: '25rem',backgroundColor:value.color }}
                                        className="mb-2"
                                        >
                                    
        
                                        <Card.Header  className="header">TO DO 
        

                                            <div className='header_button'> 
                                               
                                                <GrView onClick={()=>{add==<></>?setadd(<></>):setadd(<Add index={value.id}/>)}} />
                                                <GrClose  size="15"  onClick={()=>deleat(idx,value)} />
                                        
                                            </div>
                                        </Card.Header>
        
                                        
                                
                                
                                        <Card.Body>
                                            <Card.Title> {value.title}</Card.Title>
                                            <Card.Text>
                                                {value.content} 
                    
        
                                            </Card.Text>
                                        </Card.Body>
        
                                    </Card>
        
                                </div>
                            )):<></>


                    

               
                }
        
            

            </div>

       

    )
  

}
export default Task;