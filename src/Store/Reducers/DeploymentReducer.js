const initialState = [{Deployments:null}];

export default  function DeploymentReducer(state=initialState,action)
{
    
    let defaultstate = Object.assign({},state)
    if(action.type === "ADD" || action.type === "LOAD" || action.type === "DEL")
        return   state.Deployments = action.payload;
      else
         return defaultstate;
  
}