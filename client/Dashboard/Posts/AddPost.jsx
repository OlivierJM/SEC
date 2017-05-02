import React, {Component, PropTypes} from 'react';
// import EditorWrapper from '../../Editor/EditorWrapper';
import Header from '../../Partials/Header';
import {Posts} from '../../../Collections/collections';


export default class AddPost extends Component {

  handleSubmit(event){
    event.preventDefault();
    let title = $('#title').val();
    let post = $('#text').val();
    let id = new Meteor.Collection.ObjectID().valueOf();
    let user = Meteor.userId();
    let status = $('#public-view').is(':checked');

    console.log(status);

    Posts.insert({
      _id:id,
      title:title,
      post:post,
      author: user,
      public:status,
      date:new Date()
    }, function(error) {

        if (error != undefined) {
            $('.alert').addClass('alert-danger').html(error.reason);
        } else {
            $('.alert').addClass('alert-success').html('Post Successfully Submitted');
            console.log(title);
            $('.field').val('');
        }
    })
  }

  render(){
    return(
      <div className=''>
        <Header />
        <div className='container'>
         <div className='row'>
            <div className='col-sm-4'>

                <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
                    <h2 className="form-signin-heading">Add Your Post</h2>
                    <div className="alert" role="alert"></div>
                    <div className='form-group'>

                        <label htmlFor="title" className="sr-only">Title of the Post</label>
                        <input type="text" id="title" className="form-control field" placeholder="Post Title" required autoFocus/>

                    </div>
                    <div className="form-group">
                        <textarea className="form-control field" id='text' placeholder="Add Your Post Here"></textarea>
                    </div>
                    <div className="form-check">
                     <label className="form-check-label">
                       <input type="checkbox" className="form-check-input" id='public-view' title='Your Post will be viewed by Everyone'/> Public
                     </label>
                   </div>
                   <div className='form-group'>

                     <button className="btn btn-lg btn-primary " type="submit"><i className='glyphicon glyphicon-send'></i> Post it</button>

                   </div>


                </form>
            </div>
        </div>
      </div>
      </div>
    )
  }
  }
