import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {NavLink} from 'react-router-dom';

// Post Form
let PostForm = ({onSubmit,submitting,formStatus}) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={onSubmit} noValidate>
                    <Field name="title" component={renderField} type="text" id="title" label="Title"></Field>
                    <Field name="body" component={renderField} type="text" id="body" label="body"></Field>
                     <button type="submit" className="btn btn-primary merchant-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' && 
                 <p className="alert alert-success">
                    <NavLink to="/posts"> Return to Posts list</NavLink>
                </p>}
                 {formStatus === 'error' &&
                <p className="alert alert-danger">Saving Post failed. Please fill in all the fields.</p>}
            </div>
        </div>
    );
};

// Render Schema for each field..

const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    // Render schema for checkbox
    (type === 'checkbox')
        ?
        <div className="checkbox">
            <label>
                <input {...input} type={type}/>
                {label}
            </label>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
        :
        // Render schema for inputs
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
    );

    // form validation...
    function validate(formProps){
        const errors = {};
        if(!formProps.title){
            errors.title = "Please enter the title for the post";
        }
        if(!formProps.body){
            errors.body = "Please enter the body for the post";
        }
        return errors;
    }


PostForm = reduxForm({
    form : 'post',
    validate,
    enableReinitialize : true
})(PostForm);

export default PostForm;