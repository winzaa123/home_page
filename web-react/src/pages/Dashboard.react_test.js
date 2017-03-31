import React from 'react'
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
            ArrayRepo: {}
        };
        this.RepoClick = this.RepoClick.bind(this);
        this.TextChange = this.TextChange.bind(this);
    }
 
//   componentDidMount() {
//     console.log("componentDidMount_DAshboard");
//   }
// handleReverse() {
//     this.setState( { repositoryNames: this.state.repositoryArrays  } );
//   }
//   componentWillUnmount(nextProps, nextState){
//      console.log("componentWillUnmount");
//     //  return {repositoryArrays: this.props.repositoryMyrepo};
// }
//   componentWillUpdate(nextProps, nextState){
//      console.log("componentWillUpdate");
//     //  return {repositoryArrays: this.props.repositoryMyrepo};
// }
//   componentWillReceiveProps(nextProps) {
//       console.log('Current props: ', this.props);
//       console.log('Next props: ', nextProps);
//     }
 
//     componentDidUpdate(prvprop,prevstate){
//                console.log("xxxxxxxxxxxxxxx");
//       console.log(prvprop);
//        console.log("xxxxxxxxxxxxxxxxx");
//     }
    
    RepoClick(e,event) {
          e.preventDefault();
        const arrayvar =this.state.repositoryNames ;
           arrayvar.push(this.state.Reponame);
            this.setState({repositoryNames: arrayvar});
 
    }
    TextChange(e) {
       this.setState({Reponame :e.target.value});
    }
    render() {
        
          var repositoryArray = this.state.repositoryNames;
        return (
            <div>
                <NewRepoForm repositoryArrays={repositoryArray}  handleClick={this.RepoClick} handleChange={this.TextChange}  />
                <RepositoryList repositoryArrays={repositoryArray} />
            </div>
        )
    }
}

export default Dashboard