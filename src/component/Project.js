import React from 'react'
import Data from './Data.json'



class Project extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <>
            
            <div className="project">
                
                
                   
                    <h2 className="projectName"> {this.props.projectName}</h2>
                    <div className="Describe">
                        {this.props.Describe}
                    </div>
                    <div>
                        <img src={this.props.img1}className="imgProject"></img>
                        <img src={this.props.img2}className="imgProject"></img>
                        <img src={this.props.img3} className="imgProject"></img>
                    </div>

       
        
             

            </div>
            </>
        )
    }
}
export default Project