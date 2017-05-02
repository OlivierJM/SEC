import React, {Component} from 'react';
import Header from './Partials/Header';
// import {Posts} from '../Collections/collections';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

export  class Home extends Component{


renderUser(){
  let user = this.props.user;
  if(user == undefined){
    return;
  }
  return `${user.profile.fname}  ${user.profile.lname}`;
}


  renderPosts(){
    let posts = this.props.posts;
    let user = ''
    if(posts ==undefined){
      return
    }
    return posts.map((post)=>(
      <div className='col-sm-6' key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.post}</p>
        <p>
        by {this.renderUser()}
        </p>
        <span>
          {Session.set('userId', post.author)}
        </span>
          <a className="glyphicon glyphicon-thumbs-up" href="#"></a>
          <span className='icons-pos'>
            <a className="glyphicon glyphicon-thumbs-down" href="#"></a>

          </span>
      </div>
    ))
  }
  render(){
    console.log(this.props.user);
    return(
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            {this.renderPosts()}
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(()=>{
  return {
    // posts: Posts.find({'public':true}).fetch(),
    user: Meteor.users.findOne({_id:Session.get('userId')}),

  }
}, Home)
