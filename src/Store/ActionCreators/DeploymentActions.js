import axios from 'axios';
export const Success = val => {
    return { type: "ADD", payload: val };
  };

  export const Load = val => {
    return { type: "LOAD", payload: val };
  };

  export const Failure = val => {
    return { type: "ERR", payload: val };
  };


  export const Delete = val => {
    return { type: "DEL", payload: val };
  };

export const AddDeployment = (Url,version,TemplateName) =>
{

 
  var request = {
    url : Url,
    templateName:TemplateName,
    version : version,
    deployedAt : new Date()
  } 
 
    return dispatch => {
        axios.post("https://glacial-meadow-62193.herokuapp.com/adddeployment",request)
          .then(res => {
            dispatch(Success(res.data));
           
          })
          .catch(err => {
            dispatch(Failure(err.message));
          });
      };
};

export const RemoveDeployment = (value) =>
{

    return dispatch => {
        axios.post("https://glacial-meadow-62193.herokuapp.com/deletedeployment",{id:value})
          .then(res => {
            dispatch(Delete(res.data));
            console.log(res.data.Data);
          })
          .catch(err => {
           
            dispatch(Failure(err.message));
          });
      };


}

export const LoadDeployment = () =>
{

   

    return dispatch => {
        axios.get("https://glacial-meadow-62193.herokuapp.com/getdeployments")
          .then(res => {
            dispatch(Load(res.data));
            console.log(res.data.Data);
          })
          .catch(err => {
            console.log(err)
            dispatch(Failure(err.message));
          });
      };


}
