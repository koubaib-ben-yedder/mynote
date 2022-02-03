import "../css/content.css";
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import {Tabs,Tab,Form,Button} from 'react-bootstrap';
import axios from "axios";
const  Content =()=>{

    
   

    const [data_note,setdata_note]=useState([])
    const [data_task,setdata_task]=useState([])
    const [data_taskbook,setdata_taskbook]=useState([])
    const [data_notebook,setdata_notebook]=useState([])
    const [data_tags,setdata_tags]=useState([])
    const [data_tagbook,setdata_tagbook]=useState([])
    const [data,setdata]=useState([])
    const [tag,settag]=useState("")
  


    const fetch =(e)=>{
        settag(e.target.value)
        const config={
            Headers:{
                "Content-Type":"application/json"
            }
        }

      
        axios.get("http://localhost:8000/data/fetch/notes",config)
        .then(response=>{
                response.data.array.map(x=>{
                  
                    if(x.tag.includes(tag)){

                        setdata(data=>[...data,x])
                      
                     
                    }
                         
                        
                    
                })
        })
        setdata([])
        settag("")
       
    }
    
    const change =(e)=>{

        settag(e.target.value)

    }
   
    const fetch_note =()=>{

        const config={
            Headers:{
                "Content-Type":"application/json"
            }
        }
        axios.get("http://localhost:8000/data/fetch/notes",config)
        .then(response=>{
            setdata_note(response.data.array)
            
        })
    }

    const fetch_task =()=>{

        const config={
            Headers:{
                "Content-Type":"application/json"
            }
        }
        axios.get("http://localhost:8000/data/fetch/tasks",config)
        .then(response=>{
            setdata_task(response.data.array)
          
        })
    }
    const fetch_taskbook =()=>{

        const config={
            Headers:{
                "Content-Type":"application/json"
            }
        }
        axios.get("http://localhost:8000/data/fetch/taskbook",config)
        .then(response=>{
            setdata_taskbook(response.data.array)
           
        })
    }
  const fetch_notebook =()=>{

    const config={
        Headers:{
            "Content-Type":"application/json"
        }
    }
    axios.get("http://localhost:8000/data/fetch/notebook",config)
    .then(response=>{
        setdata_notebook(response.data.array)
       
    })
}
const fetch_tags =()=>{

    const config={
        Headers:{
            "Content-Type":"application/json"
        }
    }
    axios.get("http://localhost:8000/data/fetch/tags",config)
    .then(response=>{
        setdata_tags(response.data.array)
      
    })
}

const fetch_tagbook =()=>{

    const config={
        Headers:{
            "Content-Type":"application/json"
        }
    }
    axios.get("http://localhost:8000/data/fetch/tagbook",config)
    .then(response=>{
        setdata_tagbook(response.data.array)
      
    })
}
    useEffect(()=>{
        fetch_note()
        fetch_task()
        fetch_taskbook()
        fetch_notebook()
        fetch_tags()
        fetch_tagbook()

        
    },[])

    return(
        
        <div className="content-parent" >

            <Tabs  defaultActiveKey="Note" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Note" title="Note">
            <div className="content-child">
                       
                <Card >

                    <Card.Header>Note</Card.Header>

                    

                        <Card.Body className="content_items">

                    


                                    
                            
                                    {data_note!=[]?data_note.map((value,index)=>{
                                       

                                        return(




                                                <Card  className="content_item" key={index}>

                                                    <Card.Body>
                                                    <Card.Title className="content_item_title"> Note :</Card.Title>

                                                        <div className="content_item_title"> {value.content}</div>
                                                        <Card.Text>
                                                        <div className="content_item_title" >
                                                            Day :{value.day} 

                                                            

                                                        </div>
                                                        <div className="content_item_title" >

                                                            Month:{value.month} 
                                                            

                                                        </div>
                                                        <div className="content_item_title" >

                                                            Years:{value.years} 
                                                            

                                                        </div>
                                                        <div className="content_item_title" >

                                                            Time: {value.time} 
                                                            

                                                        </div>
                                                        <div className="content_item_title" >

                                                            Date:{value.date} 
                                                            

                                                        </div>
                                                        <div className="content_item_title" >

                                                            Tag:{value.tag} 


                                                            </div>

                                                        </Card.Text>
                                                    </Card.Body>

                                                </Card>
                                        

                                        )

                                    }):<></>}




                    
                                </Card.Body>
                        </Card>
            </div>
            </Tab>
            <Tab eventKey="Task" title="Task">
            <div className="content-child">
                       
                       <Card >
       
                           <Card.Header>Task</Card.Header>
       
                           
       
                               <Card.Body className="content_items">
       
                           
       
       
                                           
                                   
                                           {data_task!=[]?data_task.map((value,index)=>{
       
                                               return(
       
       
       
       
                                                       <Card style={{backgroundColor:value.color}}  className="content_item" key={index}>
       
                                                           <Card.Body>
                                                           <Card.Title className="content_item_title"> Task:</Card.Title>

                                                                    <div className="content_item_title"> {value.content}</div>
                                                                    <Card.Text>
                                                                    <div className="content_item_title" >
                                                                        Day :{value.day} 
                                                                    
                                                                        

                                                                    </div>
                                                                    <div className="content_item_title" >

                                                                        Month:{value.month} 
                                                                        

                                                                    </div>
                                                                    <div className="content_item_title" >

                                                                        Years:{value.years} 
                                                                        

                                                                    </div>
                                                                    <div className="content_item_title" >

                                                                        Time: {value.time} 
                                                                        

                                                                    </div>
                                                                    <div className="content_item_title" >

                                                                        Date:{value.date} 
                                                                        

                                                                    </div>
                                                                    <div className="content_item_title" >

                                                                        Taskbook:{value.title} 


                                                                        </div>

                                                                    </Card.Text>
                                                           </Card.Body>
       
                                                       </Card>
                                               
       
                                               )
       
                                           }):<></>}
       
       
       
       
                           
                                       </Card.Body>
                               </Card>
                   </div>
            </Tab>
            <Tab eventKey="Tagbook" title="Tagbook" >
            <div className="content-child">
                       
                       <Card >
       
                           <Card.Header>tagbook</Card.Header>
       
                           
       
                               <Card.Body className="content_items">
       
                           
       
       
                                           
                                   
                                           {data_tagbook!=[]?data_tagbook.map((value,index)=>{
       
                                               return(
       
       
       
       
                                                       <Card  className="content_item" key={index}>
       
                                                           <Card.Body>
       
                                                               <Card.Title className="content_item_title"> Tagbook:</Card.Title>

                                                               <div className="content_item_title"> {value.content}</div>
                                                               <Card.Text>
                                                               <div className="content_item_title" >
                                                                    Day :{value.day} 
                                                                  
                                                                    
                                                               
                                                               </div>
                                                               <div className="content_item_title" >
                    
                                                                    Month:{value.month} 
                                                                   
                                                               
                                                               </div>
                                                               <div className="content_item_title" >
                    
                                                                    Years:{value.years} 
                                                                   
                                                               
                                                               </div>
                                                               <div className="content_item_title" >
                    
                                                                   Time: {value.time} 
                                                                   
                                                               
                                                               </div>
                                                               <div className="content_item_title" >
                    
                                                                    Date:{value.date} 
                                                                   
                                                               
                                                               </div>
                                                               
                                                               </Card.Text>
                                                               
                                                           </Card.Body>
       
                                                       </Card>
                                               
       
                                               )
       
                                           }):<></>}
       
       
       
       
                           
                                       </Card.Body>
                               </Card>
                   </div>
                    </Tab>
                   <Tab eventKey="Notebook" title="Notebook">
                   <div className="content-child">
                       
                       <Card >
       
                           <Card.Header>Notebook</Card.Header>
       
                           
       
                               <Card.Body className="content_items">
       
                           
       
       
                                           
                                   
                                           {data_notebook!=[]?data_notebook.map((value,index)=>{
       
                                               return(
       
       
       
       
                                                       <Card  className="content_item" key={index}>
       
                                                           <Card.Body>
                                                           <Card.Title className="content_item_title"> Notebook:</Card.Title>

                                                                <div className="content_item_title"> {value.content}</div>
                                                                <Card.Text>
                                                                <div className="content_item_title" >
                                                                    Day :{value.day} 
                                                                
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Month:{value.month} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Years:{value.years} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Time: {value.time} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Date:{value.date} 
                                                                    

                                                                </div>

                                                                </Card.Text>
                                                               
                                                           </Card.Body>
       
                                                       </Card>
                                               
       
                                               )
       
                                           }):<></>}
       
       
       
       
                           
                                       </Card.Body>
                               </Card>
                   </div>
                    </Tab>
                   <Tab eventKey="Takbook" title="Taskbook">
                   <div className="content-child">
                       
                       <Card >
       
                           <Card.Header>Taskbook</Card.Header>
       
                           
       
                               <Card.Body className="content_items">
       
                           
       
       
                                           
                                   
                                           {data_taskbook!=[]?data_taskbook.map((value,index)=>{
       
                                               return(
       
       
       
       
                                                       <Card  className="content_item" key={index}>
       
                                                           <Card.Body>
       
                                                           <Card.Title className="content_item_title"> Taskook:</Card.Title>

                                                                <div className="content_item_title"> {value.content}</div>
                                                                <Card.Text>
                                                                <div className="content_item_title" >
                                                                    Day :{value.day} 
                                                                
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Month:{value.month} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Years:{value.years} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Time: {value.time} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Date:{value.date} 
                                                                    

                                                                </div>

                                                                </Card.Text>
                                                               
                                                           </Card.Body>
       
                                                       </Card>
                                               
       
                                               )
       
                                           }):<></>}
       
       
       
       
                           
                                       </Card.Body>
                               </Card>
                   </div>
                   </Tab>
                   <Tab eventKey="Tags" title="Tags">
                   <div className="content-child">
                       
                       <Card >
       
                           <Card.Header>Tags</Card.Header>
       
                           
       
                               <Card.Body className="content_items">
       
                           
       
       
                                           
                                   
                                           {data_tags!=[]?data_tags.map((value,index)=>{
       
                                               return(
       
       
       
       
                                                       <Card className="content_item" key={index}>
       
                                                           <Card.Body>
       
                                                           <Card.Title className="content_item_title"> Tags:</Card.Title>

                                                                <div className="content_item_title"> {value.content}</div>
                                                                <Card.Text>
                                                                <div className="content_item_title" >
                                                                    Tagbook :{value.content} 
                                                                
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >
                                                                    Day :{value.day} 
                                                                
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Month:{value.month} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Years:{value.years} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Time: {value.time} 
                                                                    

                                                                </div>
                                                                <div className="content_item_title" >

                                                                    Date:{value.date} 
                                                                    

                                                                </div>

                                                                </Card.Text>
                                                           </Card.Body>
       
                                                       </Card>
                                               
       
                                               )
       
                                           }):<></>}
       
       
       
       
                           
                                       </Card.Body>
                               </Card>
                   </div>

            </Tab>
            <Tab eventKey="search" title="search">
                   <div className="content-child">
                       
                   <Card >
       
                    <Card.Header>
                        
                        <Form  >
                            <div className="content_child_header">
                                            <div className="content_child_header_title">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="search" name="tag" value={tag} onChange={change}/>
                                                </Form.Group>
                                            </div>
                                        <div><Button  variant="outline-secondary" onClick={fetch}>search</Button></div>
                            </div>      
                        </Form>
                    </Card.Header>

       

           <Card.Body className="content_items">

        
          
       
        
        
                   
        
                {data!=[]?data.map((value,index)=>{
                 

                        return(




                                <Card  className="content_item" key={index}>

                                    <Card.Body>
                                    <Card.Title className="content_item_title"> Note :</Card.Title>

                                        <div className="content_item_title"> {value.content}</div>
                                        <Card.Text>
                                        <div className="content_item_title" >
                                            Day :{value.day} 

                                            

                                        </div>
                                        <div className="content_item_title" >

                                            Month:{value.month} 
                                            

                                        </div>
                                        <div className="content_item_title" >

                                            Years:{value.years} 
                                            

                                        </div>
                                        <div className="content_item_title" >

                                            Time: {value.time} 
                                            

                                        </div>
                                        <div className="content_item_title" >

                                            Date:{value.date} 
                                            

                                        </div>
                                        <div className="content_item_title" >

                                            Tag:{value.tag} 


                                            </div>

                                        </Card.Text>
                                    </Card.Body>

                                </Card>


                        )

                        }):<></>}

                             
                   </Card.Body>
           </Card>
                   </div>

            </Tab>

           
            </Tabs>

         

        </div>
            
          
        
    )
}
export default Content ;