import React, { Component, Suspense } from 'react';
import './Blog.css';

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

//import Posts from './Posts/Posts';



import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

const Posts = React.lazy(() => import('./Posts/Posts'));

/* Link: for generating link */
class Blog extends Component {

    state = {
        auth: true
    }
   
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
                {  <Switch>
                    <Route path="/posts" exact render={() => <Suspense fallback={<div>Loading...</div>}> <Posts/></Suspense> }/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
                }
                {/* 
                {  <Switch>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
                }
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/>: null}                    
                    <Route path="/posts" exact component={Posts}/>                                      
                    {<Route path="/:id" exact component={FullPost}/>}
                    <Route render={() => {
                        return ("Requested Path is not available");
                    }}/>
                    {/* <Redirect from="/" to="/posts"/> }
                </Switch> */}
                {/* Reloads page - State wil be lost */}
                {/* Only re render */}
            </div>
        );
    }
}

export default Blog;