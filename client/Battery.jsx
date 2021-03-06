import React, {Component} from 'react';
import Header from './Partials/Header';
import {Session} from 'meteor/session';

export default class Battery extends Component {

  handleCalcute(event){
    event.preventDefault();
    let bSize =  $('#bsize').val();
    let bVolts = $('#bvolts').val();
    let batteryPower = bSize * bVolts;
    console.log(batteryPower);
  let bEnergy =  Session.get('energy');
  $('.bEnergy').html(`<p>The Energy From your Solar is ${bEnergy} Watts</p>`)
  $('.bCapacity').html(`<p>Your Battery Capacity is  ${batteryPower} Watt Hours<br/><br/> This means You can use ${batteryPower} Watts per hour</p>`)

    if(batteryPower >= bEnergy ){
      $(".alert").addClass('alert-success').html('You can use this battery');
    } else {
      $(".alert").addClass('alert-danger').html(`Kindly Get a battery that is higher than ${bEnergy} Watts`);

    }




  }

  ComponentDidMount(){

    let bEnergy =  Session.get('energy');
    console.log(bEnergy);
  }
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
          <div className="col-sm-6">
        <form className="" onSubmit={this.handleCalcute.bind(this)}>
            <h2 className="form-signin-heading">Get the Correct Battery For your Home</h2>
            <div className='form-group'>

                <label htmlFor="bsize" className="" title="kindly get these details from the package">Size of the Battery</label>
                <input type="number" id="bsize" className="form-control" placeholder="Size of the Battery in Amps" required autoFocus/>

            </div>
            <div className='form-group'>

                <label htmlFor="bvolts" className="" title="kindly get these details from the package">Voltages of the Battery</label>
                <input type="number" id="bvolts" className="form-control" placeholder="Voltages of the Battery" required/>

            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Calculate</button>

        </form>
      </div>
      <div className="col-sm-6">
        <div className="bEnergy">
          <p >

          </p>
        </div>
        <div className="bCapacity">

        </div>
        <div className="alert" role="alert"></div>

      </div>
      </div>
    </div>
  </div>
    )
  }


}
