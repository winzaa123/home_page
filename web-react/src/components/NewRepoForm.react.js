import React from 'react'
 
import RepoListInput from './RepoListInput.react'

import { fetchSearchRepository } from 'api'
class NewRepoForm extends React.Component {
         state = {
    list_repo: [],
    }
    live_search_repo(e){
        let q = e.target.value;
        if(q){
            fetchSearchRepository(q)
                .then((result) => {
                    this.setState({
                        list_repo: result,
                    })
                  })
                  
        }else{
            this.setState({
                        list_repo: [],
                    })
        }
        // console.log(e.target.value);
    }
    
    render() {

        return (
            <div className="section column is-half">
                <form  onSubmit={this.props.handleSubmit} >
                    <div className="field   ">
                
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Enter Repository Name"  name='reponame' onKeyUp={this.live_search_repo.bind(this)}/>
                        </p>
                        
                        <RepoListInput itemList={this.state.list_repo.items}/>
                    </div>
                    <button className="button is-info" type="submit">
                    Add Repository
                    </button>
                </form>
            </div>
        )
    }

}


 
 
export default NewRepoForm 