import React from 'react'
 
class NewRepoForm extends React.Component {
    

    
    render() {

        return (
            <div className="section">
                <form  onSubmit={this.props.handleSubmit} >
                    <div className="field">
                
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Enter Repository Name"  name='reponame'/>
                        </p>
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