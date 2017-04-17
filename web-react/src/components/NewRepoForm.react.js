import React from 'react'
 
import RepoListInput from './RepoListInput.react'
import RepoListItemLoading from './RepoListItemLoading.react' 
import { fetchSearchRepository } from 'api'
class NewRepoForm extends React.Component {
         state = {
    list_repo: [],
    loading : "No"
    }
 
    ClickChooseRepo( e,value){
       
       this.refs.reponame.value = value;
       this.refs.add_repo.click();
           this.setState({
                                list_repo: [],
           });
         this.refs.reponame.value = null;
    }
     componentDidMount() {
        window.addEventListener("keyup",this._inputKey);
    }
      componentWillUnmount() {
        window.removeEventListener('keyup', this._inputKey)
    }
      _inputKey = (e) => {
          let q = e.target.value;
           this.setState({
                                loading : "Wait"
                            })
                   if(q){
                    fetchSearchRepository(q)
                        .then((result) => {
                            this.setState({
                                list_repo: result,
                                loading : "True"
                            })
                        })
                        
                }else{
                    this.setState({
                                list_repo: [],
                                loading :"No"
                            })
                }
    }
    render() {
            const EventClick = this.ClickChooseRepo.bind(this);
        return (
            <div className="section column is-half">
                <form  onSubmit={this.props.handleSubmit}  >
                    <div className="field   ">
                
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Enter Repository Name"  name='reponame' ref="reponame"   />
                        </p>
                           { this.state.loading==="Wait" ? <RepoListItemLoading/> :   <RepoListInput itemList={this.state.list_repo.items} ClickRepo={EventClick}/>}
                      
                    </div>
                    <button className="button is-info" type="submit"  ref='add_repo'>
                    Add Repository
                    </button>
                </form>
            </div>
        )
    }

}


 
 
export default NewRepoForm 