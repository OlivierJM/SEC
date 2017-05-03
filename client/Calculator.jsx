import React, {Component} from 'react';
import {Session} from 'meteor/session';
import Header from './Partials/Header';

export default class Calculator extends Component {


  getData(){
    var lat = Session.get('lat');
    var lon = Session.get('lon')

    var link = "http://api.openweathermap.org/v3/uvi/"+lat+','+lon+"/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8";
    // fetch("http://api.openweathermap.org/v3/uvi/-15.3,20.8/current.json?appid=9b4b3c2c3e0f4891591a759ce746eef8")
    $.get(link, function(data){
      Session.set('uvIndex', data.data)
    }
  )}

  handleCalcute(event){
    event.preventDefault();
    let solarRadiation = '1.27';
    let spa = $('#spa').val();
    let efficiency = $('#eff').val();
    // let loc = $('#location').val();
    let uvIndex = Session.get('uvIndex');
    let radiation = uvIndex * 100;
    let aEnergy = radiation * spa * efficiency;

    Session.set('energy', aEnergy)
    Session.set('radiation', radiation);
    // $('#rads').text("The Solar Radiation for your area is: " + radiation + "Watts/meter squared")
    $('#amount').text(aEnergy);


  }

  render(){
    var loc = '';
    var lat = '';
    var lon = '';
    $.get("http://ipinfo.io", function(response) {
        loc = response.loc;
        var coords = loc.split(',');
        for (let a in coords){
          lat = Math.floor(coords[0]);
          lon = Math.floor(coords[1]);
        }
      $('#location').val(response.loc)
      loc = response.loc
      Session.set('lat', lat);
      Session.set('lon', lon);
      console.log(lat, lon);
  }, "jsonp");

  var rad = Session.get('uvIndex');

    return(
      <div className="calc">
        <Header />
        {this.getData()}
        <div className='container'>
          <div className='row'>
              <div className='col-sm-4'>

                  <form className="form-signin" onSubmit={this.handleCalcute.bind(this)}>
                    <h3 className="" ><span id="rads">The UV Index in your location is: {rad}</span></h3>
                      <h2 className="form-signin-heading">Calculations</h2>
                      <div className="alert" role="alert"></div>
                      <div className='form-group'>

                          <label htmlFor="spa" className="sr-only">Solar Panel Area</label>
                          <input type="number" id="spa" className="form-control" placeholder="Solar Panel Area in meter squared eg:30 " required autoFocus/>
                          <input className="" id="location" hidden placeholder={loc}/>
                      </div>

                      <div className='form-group'>

                          <label htmlFor="eff" className="sr-only">Efficiency</label>
                          <input type="number" id="eff" className="form-control" pattern='[0-12]' placeholder="Put Solar Panel Efficiency range eg:8-12" required/>

                      </div>

                      <button className="btn btn-lg btn-primary btn-block" type="submit">Calculate</button>

                  </form>
              </div>
              <div className="col-sm-4">
                <h4>The amount of usable energy you can get from this solar panel in your area is</h4>
                <h2><span id="amount"></span> Watts</h2>
                 {/* {Session.get('energy')} */}
              </div>
              <div className="col-sm-4">
                <h3 className="text-primary">Table to help you with How much Appliances use</h3>
                <table className='table table-striped '>
                  <thead>
                    <tr>
                      <th>Appliance</th>
                      <th>Watts</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard Tv</td>
                      <td>188</td>
                    </tr>
                    <tr>
                      <td>LCD Monitor</td>
                      <td>80 - 150</td>
                    </tr>
                    <tr>
                      <td>Portable Fan</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Stereo </td>
                      <td>60</td>
                    </tr>

                  </tbody>
                </table>
              </div>
          </div>
        </div>

      </div>
    )
  }

}
export function initiate_geolocation() {
     navigator.geolocation.getCurrentPosition(handle_geolocation_query);
 }

export function handle_geolocation_query(position){
     alert('Lat: ' + position.coords.latitude + ' ' +
           'Lon: ' + position.coords.longitude);

         }
