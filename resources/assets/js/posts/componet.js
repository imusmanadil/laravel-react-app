import React, { Component } from 'react';
import store from './store/store';
import { connect } from "react-redux";



class Posts extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
    }

    render() {
        const output = this.props.posts.map((post,i)=>{
            return     (<div key={i}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>)
            });
        return (
            <div>
            {output}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        posts :state.posts
    };
}


export default connect(mapStateToProps)(Posts);