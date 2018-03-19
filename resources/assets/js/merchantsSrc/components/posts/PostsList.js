import React from 'react';

const PostsList = ({posts}) => {
    return (
        !posts.length ?
        <p className="alert alert-warning text-center">No Posts found</p>
        :
        <div className="post-list">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PostsList;