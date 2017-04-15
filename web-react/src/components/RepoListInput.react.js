import React from 'react'
import RepoListItem from './RepoListItem.react' 


class RepoListInput extends React.Component {
    
    render() {
 
        const libraries = [

            { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
            { name: 'AngularJS', url: 'https://angularjs.org/'},
            { name: 'jQuery', url: 'http://jquery.com/'},
            { name: 'Prototype', url: 'http://www.prototypejs.org/'},
            { name: 'React', url: 'http://facebook.github.io/react/'},
            { name: 'Ember', url: 'http://emberjs.com/'},
            { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
            { name: 'Dojo', url: 'http://dojotoolkit.org/'},
            { name: 'Mootools', url: 'http://mootools.net/'},
            { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
            { name: 'Lodash', url: 'http://lodash.com/'},
            { name: 'Moment', url: 'http://momentjs.com/'},
            { name: 'Express', url: 'http://expressjs.com/'},
            { name: 'Koa', url: 'http://koajs.com/'},
            
        ]; 
          const img_t = 'http://bulma.io/images/placeholders/96x96.png' ;
    const repositoryFormItems = libraries.map( (v) => {
            return <RepoListItem   key={v.name}  name={v.name} img={img_t} description="description" />
        })    
    return (
                 <ul className="contacts-list"  >
                             {repositoryFormItems}
                                
                        </ul>
    );
    }
}

export default RepoListInput