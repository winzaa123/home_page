import React from 'react'
//   import { fetchRepository } from 'api'
import {Link} from 'react-router-dom'
class RepositoryListItem extends React.Component {

    state = {
        repository: this.props.repositoryName
    }
 
    componentDidMount() {        
       this.state.repository.then(res=>{
            if(res["message"]==="Not Found"){
              this.setState({repository : res.full_name="No Repo"});
                
            }
            this.setState({repository: res});
       });
    }
 componentWillUnmount () {
    console.log("123");
    }
    render() {
        const { 
            full_name = "Loading...",
            description,
            stargazers_count,
            open_issues_count,
            forks_count,
            watchers_count,
            organization = {}   // firsttime not value {} = for Decalre
         } = this.state.repository
        const EventClick = this.props.ClickRemove.bind(this, this.state.repository);
        const link_star = "/Stargazer/"+full_name;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src={organization.avatar_url}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                             <button className="delete is-pulled-right"  onClick={EventClick}  > </button>
                            <p>
                                <strong><a className="title" href="/">
                                { full_name }
                                </a></strong>
                            </p>
                            <p className="subtitle">
                                { description }
                            </p>
                        </div>
                    </div>
                </article>

                <hr/>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <Link  className="title"  to={link_star}    >
                            <p className="heading">Stars </p>
                            { stargazers_count }
                            </Link>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Open Issues</p>
                            <p className="title">{ open_issues_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Forks</p>
                            <p className="title">{ forks_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Watchers</p>
                        <p className="title">{ watchers_count }</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryListItem