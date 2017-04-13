export default function fetchRepository(scopeName) {
  return (dispatch, getState, api) => {
    const { fetchRepository } = api

    fetchRepository(scopeName).then( (repository) => {
       let res = repository;
       res._isReady = false;
      if(repository["message"]==="Not Found"){
       
        res.full_name = "No Repo";
        console.log("ERROR");
             dispatch({
              type: 'FETCH_REPOSITORY_FAILED',
              data: res
              })
              
      }else{
       
             dispatch({
              type: 'FETCH_REPOSITORY_SUCCESS',
              data: res
            })
      }
 
      
    })
  }
}