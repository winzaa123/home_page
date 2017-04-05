import React from 'react'

//   import { fetchRepository } from 'api'

class Stargazer extends React.Component {

     state = {
        userName: this.props.match.params.userName,
        repoName: this.props.match.params.repoName

    }
componentDidMount() {
   
}

componentWillUnmount () {
 
}
   
    render() {
        
         
        return (
            <div className="row">
               Hello Star : { this.state.userName} 
            </div>
        )
    }
}

export default Stargazer