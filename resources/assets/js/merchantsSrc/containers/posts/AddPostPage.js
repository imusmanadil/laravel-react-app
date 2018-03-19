import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/postActions';
import PostForm from '../../components/posts/PostForm';

class AddPostPage extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if (!this.props.postForm.syncErrors){
            let post = Object.assign({},this.props.postForm.values,{
                id : this.props.newId
            });
            this.props.actions.addPost(post);
            this.setState({
                formStatus : 'success'
            });
        } else {
            this.setState({
                formStatus : 'error'
            });
        }
    }

    render() {
       return (
        <div className="add-post">
            <h1 className="text-center text-capitalize">
                Add new Post
            </h1>
            <PostForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}></PostForm>
        </div>);
    }
}

// Generate ID for new merchant
function generateNewId(posts) {
    // Clone Posts array
    let sortedPosts = posts.slice(0);
    // Sort Posts by ID
    sortedPosts = sortedPosts.sort(function(a, b) {
        return b.id - a.id;
    });
    let lastId = sortedPosts.length ? parseInt(sortedPosts[0].id, 10) : 0;
    console.log(lastId);
    return lastId + 1;
}

function mapStateToProps(state) {
    console.log(state.posts);
    let newId = generateNewId(state.posts);
    return {
        postForm: state.form.post,
        newId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);