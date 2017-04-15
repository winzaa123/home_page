import React from 'react'
 
class RepoListItem extends React.Component {

    render() {
       
    return (
      <li className="contact">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={this.props.img} alt="Image" />
                    </figure>
                </div>
                  <div className="media-content">
                    <p className="title is-4">{this.props.name}</p>
                    <p className="subtitle is-6">{this.props.description}</p>
                  </div>
              </div>
            </div>
      </li>
    );
    }
}

export default RepoListItem