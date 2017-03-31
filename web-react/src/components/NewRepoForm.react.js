import React from 'react'
 
class NewRepoForm extends React.Component {
    

    
    render() {

        return (
            <div className="section">
                <form  >
                    <div className="field">
                
                        <p className="control">
                            <input className="input is-large" type="repoName" placeholder="Enter Repository Name" onChange={ this.props.handleChange }/>
                        </p>
                    </div>
                    <button className="button is-info" onClick={this.props.handleClick }>
                    Add Repository
                    </button>
                </form>
            </div>
        )
    }

}
 
 
 
export default NewRepoForm 