import React from 'react'
import logo from './logo.svg';

import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {FaHome } from "react-icons/fa";
import {FaUserAlt } from "react-icons/fa";
import {FaPhone } from "react-icons/fa";
import {FaRProject } from "react-icons/fa";
import img from './imgs.jpg'
import Project from './component/Project';
import Data from './component/Data.json'

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Pacifico&display=swap');
</style>

class  App extends React.Component {
constructor(props){
  super(props)
  this.state={
    show:false,
    
  }
}
 
  render(){
    const projectFun= () => {
    this.setState({
      show:true,
      
    })
  
    

    }
  return (
    <>
   
    <div className="container ">
     
      <ul>

      <img  className="img"src={img}></img>

      <h5 style={{textAlign:"center",marginTop:2,marginLeft:18}}>Eman Mkhareez</h5>

      <a href="https://github.com/emanmkhareez" ><FaGithub className="icon" /></a>
      <a><FaInstagramSquare className="icon"/></a>
      <a href="#"><FaFacebookF className="icon"/></a>
      <a><FaLinkedinIn className="icon"/></a>

      <li><a href="#"><FaHome/> Home</a></li>  
      <li><a href="#"  onClick={projectFun}><FaRProject  /> Project</a></li> 
        <li><a href="#"><FaUserAlt/>  About Us</a></li>
      
        <li><a href="#"><FaPhone/> Contact Us</a></li>
        

      </ul>
     

      {/* if the show ==false render the project component else render the div that have class ="body"  */}

    <div className="body">
      <div><img src="https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="imgBody"></img></div>
      <h2 className="myname">Eman Almkareez</h2>
      <h4 className="programmerfresh">programmer fresh</h4>
      </div>
       <h4 className="footer">designed by:<span style={{color:' rgb(75, 70, 70)'}}>eman mkhareez</span></h4>

</div>
{this.state.show?
Data.map((item)=>{
  return(
    <Project
    projectName
projectName={item.projectName}
Describe={item.Describe}
img1={item.img1}
img2={item.img2}



    />
  )
}):null}
       </>
   
  )
  }
}

export default App;
