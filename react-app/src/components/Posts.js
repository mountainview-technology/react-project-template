import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getPosts} from '../states/Posts/reducer';

const ConnectedPosts = ({getPosts, posts, isLoading, error}) =>{

    useEffect(() =>{
        getPosts({ url: "https://jsonplaceholder.typicode.com/posts"})
    }, []);

    const postList = isLoading ? 
    (<div>loading...</div>) : 
    (<ul>
        {posts.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>);

    return (
       <>
       <h2> Posts </h2>
        {
            error && <div> {error} </div>
        }
        { postList }
       </>
    );
};

const mapStateToProps = ({posts}) =>{
    return {
        posts: posts.posts.slice(0, 10),
        isLoading: posts.isLoading,
        error: posts.error
    }
}

const Posts = connect(
    mapStateToProps,
    {
        getPosts
    },
)(ConnectedPosts);

export default Posts;
