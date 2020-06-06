import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../Store/ActionCreators/DeploymentActions';

class Deployments extends React.Component
{
    constructor (props)
    { 

       super(props);


    }


componentDidMount()
{   
    this.props.LoadDeployment();
}


    render()
    {

        return( 

            <div>
               
                <ul style={{listStyleType:"none"}}>
                  {/* { this.props.Deployments && this.props.Delployments.map((Delployment,index)=><li key={Delployment._id}>{Delployment.templateName} <button name="removeTask" onClick={event=>this.props.handleClickIndex(Delployment._id)}>x</button></li>  */}
                    {this.props.Deployments && this.props.Deployments.map((Delployment,index)=> <li key={Delployment._id}>{Delployment.templateName} <button name="removeTask" onClick={event=>this.props.handleClickIndex(Delployment._id)}>x</button></li> )}
         
                </ul>
                
            </div>
            
        )
    }


}

const mapStateToProps= (state) => 
   {
        return {
            Deployments:state.Data
        }
  }

  const mapDispatchToProps = (dispatch,Ownprops) => {
        return {
            LoadDeployment : ()=> dispatch(actionCreator.LoadDeployment()),
            handleClickIndex : (DepID)=> dispatch(actionCreator.RemoveDeployment(DepID))
        }
   }

export default connect(mapStateToProps,mapDispatchToProps)(Deployments);





