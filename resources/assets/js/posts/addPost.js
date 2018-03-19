import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {addPost} from './action';

const SimpleForm = props => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="interesting">Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title for Post"
          />
        </div>
      </div>
      <div>
        <label htmlFor="body"></label>
        <div>
          <Field
            name="body"
            component="input"
            type="text"
            placeholder="Body"
          />
        </div>
      </div>
      <div>
        <label htmlFor="interesting">Interesting</label>
        <div>
          <Field
            name="interesting"
            id="interesting"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

const AddPostForm =  reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);

class AddPostClass extends React.Component {
     constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(post);
            let post = Object.assign({}, this.props.AddPostForm.values);
            this.props.actions.addPost(post);

    }

    render() {
        return (
            <div className="add-merchant">
                <h1 className="text-center text-capitalize">Add new Post</h1>
                <AddPostForm onSubmit={this.handleSubmit}  />
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addPost, dispatch)
    };
}

export default connect( mapDispatchToProps)(AddPostClass);