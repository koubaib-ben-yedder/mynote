
import "../css/add.css";
import { GrClose } from "react-icons/gr";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCallback, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { FcApproval,FcHighPriority } from "react-icons/fc";
const Add =(props)=>{;


    const [color,setcolor]=useState("");
    const [content,setcontent]=useState("");
    const [taskbook,settaskbook]=useState("");
    const [color_verif,setcolor_verif]=useState(<></>);
    const [content_verif,setcontent_verif]=useState(<></>);
    const [taskbook_verif,settaskbook_verif]=useState(<></>);


    const deleat =()=>{

        window.location.reload();
        


    }

    const change  =useCallback((e)=>{

        if(e.target.name=="taskbook"){

            settaskbook(e.target.value);

        }
        else{
            if(e.target.name=="content"){

                setcontent(e.target.value);
            }
            else{
                if(e.target.name=="color"){

                    setcolor(e.target.value);
                }
            }
        }
    },[color,taskbook,content])


    const setadd =()=>{
       console.log(props.index)



       const data={
           Headers:{
               "Content-Type":"application/json"

           }
       }

       axios.get("http://localhost:8000/data/fetch/tasks",data)
       .then(response=>{

        response.data.array.map((x)=>{
       


            if(x.id==props.index){

                settaskbook(x.title)
                setcontent(x.content)
                setcolor(x.color)
 
            }
        

        })
       })
     
    }

    useEffect(()=>{
        setadd()
    },[])

    const conform =useCallback(()=>{

      



        if(taskbook==""){

            settaskbook_verif(<div className="error"><FcHighPriority size={15}/>Taskook can't be empty</div>)
          
            
          
            
        }else{
            if(content==""){  
                setcontent_verif(<div className="error"> <FcHighPriority size={15}/>Content can't be empty</div>)

                settaskbook_verif(<div className="verified"> <FcApproval size={15}/> Taskbook verified</div> )

                
          
            }else{

                if(color==""){

                    setcolor_verif(<div className="error_color"><FcHighPriority size={15}/> Color can't be empty</div>)
                    settaskbook_verif(<div className="verified"><FcApproval size={15}/> Taskbook is verified</div>)
                    setcontent_verif(<div className="verified"> <FcApproval size={15}/>Content is verified</div>)


                 }

                    else{


                        if(props.index==-1){

                            setcolor_verif(<div className="verified_color"><FcApproval  size={15}/> Color verified </div>)
                            settaskbook_verif(<div className="verified"><FcApproval size={15}/>Taskbook verified </div>)
                            setcontent_verif(<div className="verified"><FcApproval size={15}/>Content verified </div>)
                         
                           
            
                            const d=new Date()
            
                            const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            
                        
                        
                        
            
            
                                const data={
            
                                    "Day":day[d.getDay()],
                                    "taskbook":taskbook,
                                    "Date":d.getDate(),
                                    "Month":d.getMonth()+1,
                                    "Years":d.getFullYear(),
                                    "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds(),
                                    "color":color,
                                    "content":content,
                                  
            
                                }
            
                              
            
            
                                axios.post("http://localhost:8000/data/insert/tasks",data)

                                window.location.reload()
                         
                      
                        }else{
                            
                            setcolor_verif(<div className="verified_color"><FcApproval  size={15}/> Color verified </div>)
                            settaskbook_verif(<div className="verified"><FcApproval size={15}/>Taskbook verified </div>)
                            setcontent_verif(<div className="verified"><FcApproval size={15}/>Content verified </div>)

                           
                                
                            setTimeout(() => {
                                   
                         
            
                                const d=new Date()
                
                                const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                
                            
                            
                            
                
                
                                    const data={
                
                                        "Day":day[d.getDay()],
                                        "taskbook":taskbook,
                                        "Date":d.getDate(),
                                        "Month":d.getMonth()+1,
                                        "Years":d.getFullYear(),
                                        "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds(),
                                        "color":color,
                                        "content":content,
                                        "index":props.index
                                     
                
                
                
                                    }
                
                                
                
                
                                    axios.post("http://localhost:8000/data/update/tasks",data)
        
                                    window.location.reload()
        
                                }, 10);
            
                         

                
            
        
                     
                        }

                        
                  
              
               
                    }
                }
            }
                

            


    },[taskbook,color,content])
    

    return(

        <div  className="content_add">

                    <Card style={{ width: '40rem' }}
                          
                            >
                          

                            <Card.Header  className="header">Add task

                                <GrClose  size="15" onClick={()=>deleat()} />

                            </Card.Header>
                    
                            <Card.Body>

                                <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>taskbook</Form.Label>
                                        <Form.Control type="title" name="taskbook" onChange={change} value={taskbook} placeholder="taskbook" />
                                        {taskbook_verif}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>content</Form.Label>
                                        <Form.Control as="textarea" name="content" onChange={change} value={content} placeholder="content" rows={3} />
                                        {content_verif}
                                    </Form.Group>
                                    </Form>
                                
                                       
                                        <div className="color">
                                            <div className="text"> 
                                           
                                                <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                                                <Form.Control
                                                    type="color"
                                                    id="exampleColorInput"
                                                    defaultValue="#563d7c"
                                                    title="Choose your color"
                                                    name="color"
                                                    onChange={change}
                                                    value={color}

                                                    
                                                  
                                                />
                                                <div>{color_verif}</div>
                                            </div>

                                         
                                           

                                            <div>  <Button variant="outline-secondary"   onClick={()=>{conform()}}>ok</Button></div>
                                        </div>
                                      
                        
                                 
                                </Card.Text>
                            </Card.Body>
                            </Card>
              
           
      
        </div>
    )

}
export default Add;