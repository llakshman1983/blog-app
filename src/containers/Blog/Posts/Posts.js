import React, { Component } from "react";
import axios from '../../../axios';
import Post  from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],        
    }

    postSelectHander = (id) => {
        this.setState({selectedPostId: id});
    }

    componentDidMount() {
        // Axios uses promises
        // Asyc call - 
        // https://jsonplaceholder.typicode.com/
        console.log("Posts > componentDidMount > [Props]", this.props);
       const blogPosts = axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map(p => {
                    return {
                        ...p, 
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // this.setState({posts: response.data});
                console.log("-----", response);
       }).catch(error => {
           console.log(error);
           this.setState({error: true});
       });
    }

    
    render() {
        
        let posts = <b style={{textAlign: 'center'}, {color: 'red'}}>Something Went Wrong</b>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.key} 
                    title={post.title}
                    author={post.author} 
                    clicked={() => this.postSelectHander(post.id)}/>
                }
            );
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;