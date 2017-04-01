import React from 'react'
import RepositoryListItem from './RepositoryListItem.react'
  import { fetchRepository } from 'api'
class RepositoryList extends React.Component {
 
        state = {
        repositoryArrays: this.props.repositoryArrays
    }
 componentDidMount() {
 
  }

  componentWillUnmount() {
 
  }

    render() {
       var repositoryItems = this.props.repositoryArrays.map( (name) => {
       const data = fetchRepository(name)
        .then( repository => {
           return repository
        })
        // const repositoryItems = this.state.repositoryArrays.map( (name) => {
            return <RepositoryListItem repositoryName={data} key={name} ClickRemove={this.props.ClickRemove} />
        })
        return (
            <div className="section">
                { repositoryItems }
            </div>
        )
    }
}

export default RepositoryList