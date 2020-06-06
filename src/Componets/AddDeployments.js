import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionCreator from '../Store/ActionCreators/DeploymentActions';
import Deployments from '../Componets/Deployment';



class AddDeployment extends React.Component
{
    constructor (props)
    {
       super(props);

       this.state = {
           versionlst :[],
           Url:"",
           TemplateName:"",
           version:"",
           deploymentslst:[]
       }

      this.onchange=this.onchange.bind(this);
     
    }
    onchange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    
    }

    componentDidMount()
    {     
          //TO load Templates list
          axios.get("https://glacial-meadow-62193.herokuapp.com/gettemplates").then((data)=>{
             this.setState({versionlst:data.data[0],TemplateName:data.data[0].name[0],version:data.data[0].versions[0]})
          }).catch((err)=>{
            console.log(err);
           })    


           
    }

    render()                   
    {

      

        return(
           
            <div>
             <table>
            <tbody>
                <tr>
                    <td>
                        <label>Url : </label>
                    </td>
                        <td>
                         <input type="text" name= "Url" width="120" height="40" onChange={this.onchange.bind()}/>
                </td>

                <td>
                        <label>Versions : </label>
                    </td>

                <td>
                    <select id = "versions" name="version" width="120" height="40" onChange={this.onchange.bind()}>
                       { this.state.versionlst.versions &&   this.state.versionlst.versions.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                </td>
                
                <td>
                        <label>Name : </label>
                    </td>
                <td>
                   <select id = "name" name="TemplateName" width="120" height="40" onChange={this.onchange.bind()}>
                    {this.state.versionlst.name &&  this.state.versionlst.name.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                </td> 
                <td>
                    <input type="button" name="Add Deployment" width="120" value="Add Deployment" height="40" onClick={()=>this.props.AddDeployment(this.state.Url,this.state.version,this.state.TemplateName)}/>
                    </td>
                </tr>

                <tr>
                   
                   <td colSpan="5">
                        <Deployments />
                   </td>
                </tr>

                </tbody>
                </table>



            </div>
           
        )

    }
}

// const mapStateToProps = (state,props) => {

//      return {
//         Deployments : state.Deployments
        
//      }

// }


const mapDispatchToProps = (dispatch,Ownprops) => {
    return {
        AddDeployment : (Url,version,TemplateName)=> dispatch(actionCreator.AddDeployment(Url,version,TemplateName)),
        LoadDeployment : () => dispatch(actionCreator.LoadDeployment())
    }
 
  }
export default connect(null,mapDispatchToProps)(AddDeployment);
