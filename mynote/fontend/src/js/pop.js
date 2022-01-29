import "../css/pop.css";
import {Card,Button,Form} from 'react-bootstrap';
import React, { useState,useCallback, useRef} from "react";
import axios from "axios";
import Switch from '@mui/material/Switch';
import { gsap,Linear} from "gsap/all";
import { AiFillDelete } from 'react-icons/ai';



const Pop =(props)=>{




    const [tag,settag]=useState("")
    const [ok,setok]=useState()
    const [table,settable]=useState([])
    const pop=useRef(null)
    const tag_ui=useRef(null)
    const [tag_table,settag_table]=useState([])
    const [view,setview]=useState()
    const [view_table,setview_table]=useState([])
    const view_ui=useRef(null)
    const [list,setlist]=useState([])
    const  tagbook_ui=useRef(null)
    const  label_tag=useRef(null)
    const  label_tagbook=useRef(null)
    const [tagbook,settagbook]=useState("")
  

    const change  =useCallback((e)=>{


     

        if (e.target.name=="tag"){

            settag(e.target.value)

         
       
          
             


         
                

          

        }else{

            if(e.target.name=="ok"){

                setok(e.target.value)
                settable([...table,ok])
               
            
                
                
                
                

                if(table.length%2==0){

           
                  
                    gsap.to(pop.current,{ duration:1, height:150,delay:2,ease:Linear.easeNone})
                    gsap.to(tag_ui.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                    gsap.to(tagbook_ui.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                    gsap.to(label_tag.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                    gsap.to(label_tagbook.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                    gsap.to(view_ui.current,{duration:1,opacity:0,ease:Linear.easeNone})
                
                            
        
        
                   
                    
        
                }else{
        
                  
        
                            gsap.to(pop.current,{ duration:1, height:400,ease:Linear.easeNone})
                            gsap.to(tag_ui.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                            gsap.to(view_ui.current,{duration:1,opacity:0,delay:1,ease:Linear.easeNone})
                            gsap.to(tagbook_ui.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                            gsap.to(label_tagbook.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                            gsap.to(label_tag.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                                        
        
        
               
                }
               
               
            }
            else{
                if(e.target.name=="view"){
                    setview(e.target.value)
                    setview_table([...view_table,view])
           
                    if(view_table.length%2==0){

           

                        gsap.to(pop.current,{ duration:1, height:150,delay:1,ease:Linear.easeNone})
                        gsap.to(view_ui.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                        gsap.to(tag_ui.current,{duration:1,opacity:0,ease:Linear.easeNone})
                        gsap.to(tagbook_ui.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                        gsap.to(label_tag.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                        gsap.to(label_tagbook.current,{ duration:1,opacity:0,ease:Linear.easeNone})
                    
                      
                                    
            
            
                       
                        
            
                    }else{
            
                      
            
                                gsap.to(pop.current,{ duration:1, height:620,ease:Linear.easeNone})
                                gsap.to(view_ui.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                                gsap.to(tag_ui.current,{duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                                gsap.to(tagbook_ui.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                                gsap.to(label_tagbook.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                                gsap.to(label_tag.current,{ duration:1,opacity:1,delay:1,ease:Linear.easeNone})
                             
                                           
            
            
                   
                    }
                   
                }else{

                    if(e.target.name=="tagbook"){
                        settagbook(e.target.value)
                    }
                }
            }
        }

           
       

    })

   const del =(index)=>{

    list.splice(index,1)

    setlist(list=>setlist(list))

  



   }



   const tagbook_conform =useCallback(()=>{

   




   const  config={
       
       Headers:{
           "Content-Type":"application/json"
       }

   }
    axios.get("http://localhost:8000/data/fetch/tags",config)

    .then(response=>{


      

        response.data.array.map(x=>{
        
        

            if(tagbook.includes(x.tagbook)){

                const t=x.content.split("#")
             
                t.map((y,w)=>{

                  
                    if(list.includes("#"+y)==false){
                        setlist(list=>[...list,"#"+y])
                    }
                  
                })
              
             
            }
        })

   



    })  





   },[list,tagbook])

   const tag_conform =useCallback(()=>{



        const w=tag.split("#")

       
    
        w.map((x,y)=>{

                if(!(list.includes("#"+x))){
                
            
                    setlist(list=>[...list,"#"+x])
                
                }

         
        
          


             
          
        })


  
   },[list,tag])
  
    const conform =useCallback(()=>{


    
    
  

            if(props.content==null){



        
        
                        const config={
                            Headers:{
                                "Content-Type":"application/json"
                            }
                        }
        
                    const d= new Date()
        
                    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                    
                    list.map((x,y)=>{
                        if(x=="#"){
                            list.splice(y,1)
                          
                            setlist(list=>{
                                setlist(list)
                            })
                        }
                    })
        
                    const data= {
        
                        "note_name":props.note_name,
                        "notebook":props.notebook,
                        "Day":day[d.getDay()],
                        "Date":d.getDate(),
                        "Month":d.getMonth()+1,
                        "Years":d.getFullYear(),
                        "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds(),
                        "tag":list.join(),
                        "id":null
        
        
                    }
        
        
                    axios.post("http://localhost:8000/data/insert/notes",data,config)

                    
        
        
                
                 
                    window.location.reload();
        
      

   

      }else{

        const config={
            Headers:{
                "Content-Type":"application/json"
            }
        }

      
        list.map((x,y)=>{
            if(x=="#"){
                list.splice(y,1)
              
                setlist(list=>{
                    setlist(list)
                })
            }
        })

        const d= new Date()

        const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        const data= {

            "note_name":props.note_name,
            "notebook":props.notebook,
            "Day":day[d.getDay()],
            "Date":d.getDate(),
            "Month":d.getMonth()+1,
            "Years":d.getFullYear(),
            "time":d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+":"+d.getMilliseconds(),
            "tag":list.join() ,
            "id":props.content


        }


        axios.post("http://localhost:8000/data/update/notes",data,config)


    
        
    
     window.location.reload();
    
    
    }

       


            

    
    },[tag,tag_table,list])


  
   
        if (props.message==true){

         
             

            return(

            

                <Card  className="pop_content"  ref={pop}>
                    
                    <Card.Header className="pop_header"> <p className="pop_header_title">   Add Tag </p>  <div className="pop_title"><Button size="sm"  variant="outline-secondary"  onClick={tagbook_conform}>tagbook</Button> <Button  variant="outline-secondary"  onClick={tag_conform}>tag</Button><Button size="sm" variant="outline-secondary" onClick={conform} >conform</Button> </div> </Card.Header>
                    <Card.Body >
                        


                         

                        
                              
                                    <Form  >
                                            <Form.Group   className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label> Tag <Switch name="ok" onChange={change} defaultChecked /> </Form.Label>
                                                <Form.Label> View <Switch name="view" onChange={change} defaultChecked /> </Form.Label>
                                                <br></br>
                                                <Form.Label ref={label_tag}> write  your tag: </Form.Label>
                                                <Form.Control ref={tag_ui}  as="textarea"  rows={2} name="tag" placeholder="write a tag "  onChange={change} />
                                             
                                                <Form.Label ref={label_tagbook}> write  your tagbook: </Form.Label>
                                                <Form.Control ref={tagbook_ui}  as="textarea"  rows={2} name="tagbook"  placeholder="write a tagbook "  onChange={change} />
                                              
                                                <div className="choix" ref={view_ui}>  
                                                <div className="choix_title"> Choose a usefull tag for  you from a tagbook child and a simple tag: </div>
                                                      {typeof(list)!="undefined"?list.map((x,y)=>{

                                                            if(x!="#" &&  x!=""){

                                                                return(

                                                                    <Card key={y} className="choix_content">
                                                                    
                                                                        <AiFillDelete className="del" onClick={()=>del(y)}/>
                                                                    <Card.Body className="content_text">
                                                                        <div style={{fontSize:"10px"}}> {x}</div> 
                                                                        
                                                                    </Card.Body>
                                                                  
                                                                    </Card>
    
                                                                )
                                                            }

                                                       
                                                          
                                                      }):

                                                      <></>

                                                    }
                                                     
                                                </div>
                                        </Form.Group>
                                    </Form>
                           
                            
                            

                            
                            
                            


                    
                    
                     

                    </Card.Body>

                </Card>

            
            )
                
        }  else{

            return(
                <>
                </>
            )
        }


      
      

   


}
export default Pop;