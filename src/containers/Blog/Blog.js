import React, { Component } from 'react';
import './Blog.css';

import {Route, NavLink} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

/* Link: for generating link */
class Blog extends Component {
   
    render () {       
        
        return (
            <div className="Blog">
                {/* Chapter 189 Setting up Links */}
                <header>
                    <nav>
                        <ul>
                        <li><NavLink to="/" exact activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink>
                        </li>
                        <li><NavLink to={{                           
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                        { /* 
                        <li><Link to="/">Home</Link></li>                            
                        <li><Link to={{

                            // Relative Path:
                            //pathname: this.props.match.url + '/new-post'
                            // only path generates - absolute path
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</Link></li>
                        */}
                        </ul>
                    </nav>
                </header>
                {/* Route can be added anywhere */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post" exact render={() => <h1>New Post</h1>}/> */}
                
                <Route path="/" exact component={Posts}/>
                <Route path="/" exact component={NewPost}/>
                <Route path="/:id" exact component={Posts}/>

                {/* Reloads page - State wil be lost */}
                {/* Only re render */}
            </div>
        );
    }
}

export default Blog;