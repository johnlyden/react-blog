import React, { Component } from 'react';
// reduxForm is similar to the redux connect helper function - hooks in all the reducers n shit
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
   return (
    <div className="form-group">
      <label>{field.label}</label>
      <input
        type="text"
        className="form-control"
        {...field.input} 
      />
      { field.meta.error }
    </div>
   ); 
  }
  
  onSubmit(values) {
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
    <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
      <Field
        label="Title"
        name="title" // what piece of state is this?
        component={this.renderField}
      />
      <Field
        label="Categories"
        name="categories"
        component={this.renderField}
      />
      <Field
        label="Post Content"
        name="content"
        component={this.renderField}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  // validate the inputs from the values object
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content please!";
  }
  // if errors is empty, the form is fine to submit
  // if errrors has *any* properties, redux form assumes form is invalid
  return errors;
}

// talks to the reducer
export default reduxForm({
  validate,
  // form is like the name of the form - may have more than one form on page
  form: 'PostsNewForm' // unique string insures if we show multiple forms at once, it will handle them all correctly
})(PostsNew);