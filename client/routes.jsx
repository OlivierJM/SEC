import React, {Component} from 'react';
import {mount} from 'react-mounter';
import {Login} from '/client/Dashboard/Accounts/Login'
import {Register} from '/client/Dashboard/Accounts/Register'
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

// FlowRouter.route('/calculate', {
//   name:'Calculator',
//   action(){
//     mount(Calculator, {})
//   }
// })
