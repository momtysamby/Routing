import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
//import FullPost from './FullPost/FullPost'

class Blog extends Component {
    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to='/posts/' 
                            exact
                            activeStyle={{textDecoration : 'underline'}}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>}/> */}
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts' component={Posts} /> 
                    {/* <Redirect from='/' to='/new-post'/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;