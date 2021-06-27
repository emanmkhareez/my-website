import React from 'react'
import logo from './logo.svg';

import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img from './imgs.jpg'
import Project from './component/Project';
import Data from './component/Data.json'



class App extends React.Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    
    return (
      <>

        <div className="container">

          <div className="box head">

            <img className="img" src={img}></img>
            <h5 className="name">EmanMkhareez</h5>
            <div className="icon">
              <a className="icons"><FaGithub /></a>
              <a className="icons"><FaInstagramSquare /></a>
              <a className="icons"> <FaFacebookF /></a>
              <a className="icons">  <FaLinkedinIn /></a>
              <a className="icons">  <FaTwitter /></a>
              <div className="ul">
                <ul>
                  <li><a href="#"><FaHome /> Home</a></li>
                  <li><a href="#project" ><FaRProject /> Project</a></li>
                  <li><a href="#developer"><FaUserAlt />  About Us</a></li>

                  <li><a href="#"><FaPhone /> Contact Us</a></li>


                </ul>
              </div>

            </div>
          </div>


          <div className="box contant">
            

            <img src="https://images.unsplash.com/photo-1532289402244-3cbf8bdeb722?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="imgBody"></img>
            <div className="myname" >

              <h2 >Eman Almkareez</h2>
              <h4 className="programmerfresh">programmer fresh</h4>

            </div>

            <div className="intro">
             <span class="developer" id="developer">I'm <br>
             </br>  a developer</span> <br></br><br></br><br></br>
              My name is eman Al-mkhareez, I graduated from Yarmouk University from the Faculty of Information Technology and Computer Science, from the Department of Computer Information Systems, and now I have taken an advanced programming scholarship from LTUC. to become a full software developer 
         
              </div>
              <br></br><br></br>
             
      



          </div>

          <div className=" box introProject" id="project" >This is a description and some photos of the projects I have done</div>
          
          <div className=" box project" >
          


            {Data.map((item) => {
              return (
                <Project
                  projectName
                  projectName={item.projectName}
                  Describe={item.Describe}
                  img1={item.img1}
                  img2={item.img2}



                />
              )
            })}

          </div>




        </div>     

      </>

    )
  }
}

export default App;
