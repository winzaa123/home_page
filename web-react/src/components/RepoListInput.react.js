import React from 'react'
import RepoListItem from './RepoListItem.react' 


class RepoListInput extends React.Component {
 

 
    render() {
 
 
    const itemList = this.props.itemList;
 
    const repositoryFormItems =  !itemList?null:itemList.map( (v) => {
            return <RepoListItem   key={v.full_name}   propResult={v}  ClickRepo={this.props.ClickRepo} />
        })    
    return (
                 <ul className="input-live-search"  >
                             {repositoryFormItems}
                                
                        </ul>
    );
    }
}

export default RepoListInput