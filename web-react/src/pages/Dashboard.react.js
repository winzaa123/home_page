import React from 'react'
import ReactDOM from 'react-dom';
import NewRepoForm from 'components/NewRepoForm.react'
import RepositoryList from 'components/RepositoryList.react'

//   import { fetchRepository } from 'api'

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
             repositoryNames: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular",
            ],
            Reponame : "",
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.btnremoveRepo = this.btnremoveRepo.bind(this);
    }
    btnremoveRepo(value,e){
        const arr_repo =this.state.repositoryNames ;
        let id_index= arr_repo.findIndex(repo => repo ===value.full_name);
        arr_repo.splice(id_index,1);
        this.setState({ repositoryNames : arr_repo});
      
     
    }
 
    getUserInput () {
        return ReactDOM.findDOMNode(this.userEntry).value;
    }
    handleSubmit(e) {
          e.preventDefault();
            var form = e.target;
            var content = form.elements['reponame'].value;
             const arrayvar =this.state.repositoryNames ;
           arrayvar.push(content);
            this.setState({repositoryNames: arrayvar});
 
    }

    render() {
          var repositoryArray = this.state.repositoryNames;
        return (
            <div>
               
                <NewRepoForm repositoryArrays={repositoryArray}  handleSubmit={this.handleSubmit}       />
                <RepositoryList repositoryArrays={repositoryArray} ClickRemove={this.btnremoveRepo} />
            </div>
        )
    }
}

export default Dashboard