import "../css/note.css";
import{ Card,Form,Button} from 'react-bootstrap';
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Pop from "./pop.js";
import React from "react";
const Note =()=>{



        const [res,setres]=useState()
        const [note_name,setnote_name]=useState()
        const [notebook,setnotebook]=useState()
        const [content,setcontent]=useState(null)
        const [pop,setpop]=useState(false)
      
      
      

        const content_real =useCallback((value)=>{


            const config={

                Headers:{
                    "Content-Type":"application/json"
                }
            }
            axios.get("http://localhost:8000/data/fetch/notes",config)
            .then(response=>{
               
                response.data.array.map(x=>{
                    if(x.id==value.id){
                    
                        setnotebook(value.notebook)
                        setnote_name(value.content)
                        setcontent(value.id)
                    }
                })
            })

           

           

        })      

      


      
      

        const data =useCallback(e=>{




         


            if(e.target.name=="note_name"){

                setnote_name(e.target.value)

            }else{

                if(e.target.name=="notebook"){

                    setnotebook(e.target.value)
                    

                }
            }

            
            


        },[note_name,notebook])

        const fetch =useCallback(()=>{

            

            const config={

                Headers:{

                    "Content-Type":"application/json"

                }
            }

      



         axios.get("http://localhost:8000/data/fetch/notes",config)

         .then(response=>{

       

            setres(response.data.array)



       


      


           
                
                  
                    
               

                 
        
        

         }).catch(err=>{
             console.error(err)
         })
    

                        
           
        })

        const conform =useCallback(()=>{


    
            

            setpop(true)
           

           
          
        },[note_name,notebook])

        useEffect(()=>{
            

              
       

            fetch()
          


            
     
            
        },[note_name,notebook])
        
      
       

    return(

        <div className="note" >

            <div className="left" > 


           <Pop  message={pop} note_name={note_name} notebook={notebook} content={content} />



            { 
                      
                      
                    typeof(res)!="undefined"?res.map((value,index) => {


                        

                                            
                      
                     return(


                            <Card className="card_note"  key={index}>

                                <Card.Body >
                                
                                    <div className="card_note_title"><h6>notebook:</h6>  {value.notebook.substring(0,100)} </div>
                                    <Card.Text>

                                        <div className="card_note_title"><h6>content:</h6>  {value.content.substring(0,100)}</div>
                                            
                                            
                                    </Card.Text>
                                
                                    <a href="#" class=" stretched-link" onClick={()=>content_real(value)} >  </a>

                            
                                </Card.Body>
                                
                            </Card>     
                     )
                    
            }):<></>         }
                        
                
              
                            
            
            
            
            
        </div>

            <div className="rigth"> 


                

             
                        <div className="top"> 
                
                         
                                <Form.Label htmlFor="inputPassword5"  >notebook</Form.Label>
                                    <Form.Control

                                        aria-describedby="passwordHelpBlock"
                                        onChange={data}
                                        name="notebook"
                                        value={notebook}
                                      
                                      
                                    
                                    />
                                  
                    
                        
                           
                        </div>

                          
                
                <div className="rigth-bottom">  
                
            
                    <Form>
                            
                        <Form.Group  className="mb-7" controlId="exampleForm.ControlTextarea1" maxlength="4">

                            <Form.Label htmlFor="inputPassword5"  >content</Form.Label>

                            <Form.Control as="textarea" rows={24} onChange={data}  name="note_name" value={note_name} /> 


                            <Button  className="button" variant="outline-secondary" onClick={conform} >save</Button>


                        </Form.Group>

                    </Form>
                 </div>
                
            </div>


        </div>
    )

}
export default Note;