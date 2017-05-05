import React, {Component} from 'react';
import {mount} from 'react-mounter';
import {Login} from '/client/Dashboard/Accounts/Login'
import {Register} from '/client/Dashboard/Accounts/Register'
import Calculator from './Calculator.jsx';
import About from './Partials/About';
import Battery from './Battery';

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

FlowRouter.route('/about', {
  name:'About',
  action(){
    mount(About, {})
  }
})
FlowRouter.route('/battery', {
  name:'Battery',
  action(){
    mount(Battery, {})
  }
})
