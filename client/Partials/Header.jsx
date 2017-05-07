import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Meteor} from 'meteor/meteor';


export  class Header extends Component {


        status(){
          if(!Meteor.userId()){
            return;
          } else {
            return true;

          }
        }
        getUserName() {
            var user = Meteor.user();
            if (user) {
                return `${user.profile.fname}  ${user.profile.lname}`;
            } else {
                return "";
            }
        }
        logOut(event){
          event.preventDefault();
          Meteor.logout(function(error){
            if(error){
              return;
            } else {
              return 'Logged Out'
            }

          });

        }
    render() {

        return (
          <div >
            { this.status() ?


            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <ul className="nav navbar-nav">
                        <li className='navLinks'>
                            <a href="/">Home</a>
                        </li>
                        <li className='navLinks'>
                            <a href="/">Calculate </a>
                        </li>
                        <li className='navLinks'>
                          <a href="/battery">Battery Tool </a>
                        </li>
                        <li className='navLinks'>
                            <a href="/about">About Us </a>
                        </li>
                    </ul>




                    <ul className="nav navbar-nav navbar-right">
                      <div className="dropdown">
                        <h4 className="dropdown-toggle navLinks-drop" data-toggle="dropdown">{this.getUserName()}
                          <span className="caret"></span></h4>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href='' className='' onClick={this.logOut.bind(this)}>
                                Log Out
                              </a>
                            </li>
                            <li>
                              <a href="" className="team">
                                UV_TECHTROIDS
                              </a>
                              </li>
                            {/* <li><a href="#">Add Post</a></li> */}
                          </ul>
                        </div>
                      </ul>
                </div>
            </nav>
            :
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Solar Energy Calculator</a>
                    </div>
                    <ul className="nav navbar-nav">

                        <li>
                            <a href="/calculate">Calculate Energy</a>
                        </li>
                        <li className=''>
                          <a href="/battery">Battery Tool </a>
                        </li>
                        <li className=''>
                            <a href="/about">About Us </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/register">
                                <span className="glyphicon glyphicon-user"></span>  Sign Up</a>
                        </li>
                        <li>
                            <a href="/login">
                                <span className="glyphicon glyphicon-log-in"></span>  Login</a>
                        </li>
                        <li>
                          <a href="">
                            UV_TECHTROIDS
                          </a>
                          </li>

                    </ul>
                </div>
            </nav>


          }
          </div>
        )
    }
}
export default createContainer(()=>{
  return {
    users:Meteor.users.find({'_id':Meteor.userId()}).fetch(),
  }
}, Header)
