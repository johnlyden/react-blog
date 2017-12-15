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
    </div>
   ); 
  }
  
  render() {
    return (
    <form>
      <Field
        label="Title"
        name="title" // what piece of state is this?
        component={this.renderField}
      />
      <Field
        label="Tags"
        name="tags"
        component={this.renderField}
      />
      <Field
        label="Post Content"
        name="content"
        component={this.renderField}
      />
    </form>
    );
  }
}

// talks to the reducer
export default reduxForm({
  // form is like the name of the form - may have more than one form on page
  form: 'PostsNewForm' // unique string insures if we show multiple forms at once, it will handle them all correctly
})(PostsNew);