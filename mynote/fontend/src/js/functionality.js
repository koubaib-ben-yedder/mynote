import { MdBook } from "react-icons/md";
import { BiNote } from "react-icons/bi";
import { AiFillTag,AiOutlineHome} from "react-icons/ai";
import { BsListTask} from "react-icons/bs";
import { IoPricetags } from "react-icons/io5";
import {MdOutlineTask} from "react-icons/md";
import { Navbar,Container,Offcanvas} from "react-bootstrap";
import React from "react";
import "../css/functionality.css";
const  Functionality =()=> {

 

return(
    <div>
        <Navbar bg="ligth" fixed="bottom"  expand={false} >
            <Container fluid>
            
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
             
                    <Offcanvas.Body className="content">


                                
                                <div className="home"> <AiOutlineHome size={30}  /><div className="home_content"><a href="/home">Home </a></div></div>  
                                <div className="Notebook"> <MdBook  size={30}  /><div className="notebook_content"> <a href="/notebook"> Notebook</a></div></div>
                                <div className="Note">  <BiNote  size={30} />  <div className="note_content"><a href="/note" >Note</a></div> </div>
                                <div className="Tag"> <AiFillTag  size={33}  /><div className="tag_content"><a href="/tag">Tag </a></div></div>        
                                <div className="Taskbook"> <BsListTask  size={30} /><div className="taskbook_content"><a  href="/taskbook" >Taskbook</a></div></div>
                                <div className="Tagbook"> <IoPricetags size={30}  /><div className="tagbook_content"><a href="/tagbook">Tagbook </a></div></div>   
                                <div className="Task"> <MdOutlineTask  size={30}  /><div className="task_content"><a href="/task">Task </a></div></div>    
                               
                                 

                         

                    </Offcanvas.Body>
              
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        
        
    </div>
)
    
}
export default Functionality;