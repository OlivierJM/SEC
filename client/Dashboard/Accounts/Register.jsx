import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {checkPassword} from './Forms';

export class Register extends Component {

    handleRegister(event) {
        event.preventDefault();
        let fname = $('#fname').val();
        let lname = $('#lname').val();
        let email = $('#inputEmail').val();
        let password = $('#inputPassword').val();
        let password2 = $('#pass').val();
        let gender = $('#gender').val();
        let location = $('#loc').val();
        let results = checkPassword(password, password2)
        if (!results.status) {
            console.log(results.status, password2, password);
            return;
        }
        Meteor.call('accountExist', email, function(error, result) {
            if (error) {
              console.log('err');
                $('.alert').addClass('alert-danger').html(error.reason);
                return;
            } else {
                let profile = {
                    'fname': fname,
                    'lname': lname,
                    'gender': gender,
                    'loc':location
                }
                // console.log(err.reason, result);
                Accounts.createUser({
                    'email': email,
                    password: password,
                    'profile': profile
                }, function(error) {

                    if (error != undefined) {
                        $('.alert').addClass('alert-danger').html(error.reason, email);
                    } else {
                        // Materialize.toast('Account successfully created!',3000);
                        $('.alert').addClass('alert-success').html('Account Successfully created');
                        // $('.field').val('');
                    }
                });
              }

            })
    }

    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 login-form'>

                        <form className="form-signin" onSubmit={this.handleRegister.bind(this)}>
                            <h2 className="form-signin-heading">Please Register</h2>
                            <div className="alert" role="alert"></div>

                            <div className='form-group'>

                                <label htmlFor="fname" className="sr-only">First Name</label>
                                <input type="text" id="fname" className="form-control" placeholder="First Name" required autoFocus/>

                            </div>
                            <div className='form-group'>

                                <label htmlFor="lname" className="sr-only">Last Name</label>
                                <input type="text" id="lname" className="form-control" placeholder="Last Name" required autoFocus/>

                            </div>
                            {/* <div className='form-group'>

                            <label htmlFor="fname" className="sr-only">First Name</label>
                            <input type="email" id="fname" className="form-control" placeholder="First Name" required />
                          </div> */}

                            <div className='form-group'>

                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>

                            </div>
                            <div className='form-group'>

                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

                            </div>
                            <div className='form-group'>

                                <label htmlFor="pass" className="sr-only">Password</label>
                                <input id="pass" type="password" required className="validate field form-control" placeholder='Confirm Password'/>

                            </div>
                            <div className='form-group'>

                                <label htmlFor="loc" className="sr-only">Lusaka</label>
                                <input type="text" id="loc" className="form-control" placeholder="Your Current Location" required autoFocus/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Select Gender:</label>
                                <select className="form-control" id="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Not Specified</option>
                                </select>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                            <h5>If you already have an account
                                <a href='/login'> Login here</a>
                            </h5>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
