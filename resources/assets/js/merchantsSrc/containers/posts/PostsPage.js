import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/postActions';
import PostsList from '../../components/posts/PostsList';

class PostsPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="posts">
                {
                    this.props.ajaxLoading ?
                    <p className="text-center alert alert-info">
                    Loading Posts... </p>
                    :
                    <PostsList posts={this.props.posts}></PostsList>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts : state.posts,
        ajaxLoading : state.ajaxLoading
    };
}

export default connect(mapStateToProps)(PostsPage);