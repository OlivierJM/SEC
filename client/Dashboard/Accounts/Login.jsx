import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export class Login extends Component {

  handleLogin(event){
    event.preventDefault();
    let email = $('#email').val();
       let password = $('#password').val();

       Meteor.loginWithPassword(email, password, function(error){
         if(error){
           $('.alert').addClass('alert-danger').html(error.reason);

         } else {
           $('.alert').addClass('alert-success').html(' Successfully logged in');
           FlowRouter.go('/');

         }
       })

  }

    render() {

        return (
          <div className='container'>
            <div className='row'>
                <div className='col-sm-4 login-form'>

                    <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <div className="alert" role="alert"></div>
                        <div className='form-group'>

                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus/>

                        </div>
                        <div className='form-group'>

                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Password" required/>

                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <h5>If you don't have an account Please <a href='/register'> Register here</a></h5>

                    </form>
                </div>
            </div>
          </div>
        )
    }
}
