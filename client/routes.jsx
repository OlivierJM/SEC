import React, {Component} from 'react';
import {mount} from 'react-mounter';
import {Login} from '/client/Dashboard/Accounts/Login'
import {Register} from '/client/Dashboard/Accounts/Register'
import Home from './Home';
import UploadUIWrapper from './Uploads/UploadUIWrapper';
import AddPost from './Dashboard/Posts/AddPost';
import Calculator from './Calculator.jsx';


FlowRouter.route('/login', {
  name: 'Login',
  action() {
    mount(Login, {});
  }
});
FlowRouter.route('/', {
    name: 'Calculator',
    action() {
        mount(Calculator, {});
    }
});
FlowRouter.route('/register', {
    name: 'Register',
    action() {
        mount(Register, {});
    }
});
FlowRouter.route('/upload', {
  name:'UploadUIWrapper',
  action(){
    mount(UploadUIWrapper, {})
  }
})

FlowRouter.route('/addpost', {
  name:'AddPost',
  action(){
    mount(AddPost, {})
  }
})
FlowRouter.route('/calculate', {
  name:'Calculator',
  action(){
    mount(Calculator, {})
  }
})
