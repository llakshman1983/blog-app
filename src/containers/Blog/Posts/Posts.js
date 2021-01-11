import React, { Component } from "react";
import axios from '../../../axios';
import Post  from '../../../components/Post/Post';
import {Link, Route} from 'react-router-dom';

import './Posts.css';
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: [],        
    }

    postSelectHander = (id) => {
      this.setState({selectedPostId: id});
       //this.props.history.push({pathname: '/' + id});
       
    }

    componentDidMount() {
        // Axios uses promises
        // Asyc call - 
        // https://jsonplaceholder.typicode.com/
        console.log("Posts > componentDidMount > [Props]", this.props);
       const blogPosts = axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(p => {
                    return {
                        ...p, 
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // this.setState({posts: response.data});
                console.log("-----", response);
                console.log("-----", this.state.posts);
       }).catch(error => {
           console.log(error);
           this.setState({error: true});
       });
    }

    
    render() {
        
        let posts = <b style={{textAlign: 'center'}, {color: 'red'}}>Something Went Wrong</b>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id}  key={post.key} >
                        <Post                       
                        title={post.title}
                        author={post.author} 
                        clicked={() => this.postSelectHander(post.id)}/>
                    </Link>)
                }
            );
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>               
            </div>
           
        )
    }
}

export default Posts;